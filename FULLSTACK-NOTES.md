Name: Peter Kadlot
Email: -
Time to complete: ~2h

## Notes:

First, since we are talking about accounting we need an auditable transaction ledger (that's basically an append only log of transactions)

Arguably the subsidies/allowances could be better treated as coupons on the backend, applied at the time of the orders. A validation function would ensure we apply them automatically when necessary and possible, calculating the final cost for the user at the given moment:

```js
function applyAllowence(usersSubsidies, baseCost, todayDate) {
  // the data we modify with allowances
  const sum = {
    baseCost,
    finalCost,
    appliedSubsidies: [],
    allowanceUsed: 0
  };

  // apply each valid allowance in valid combinations/order
  return usersSubsidies.reduce((sum, allowence) => {
    if (allowence.type === 'day' && isEqualWeekDay(allowence.day, todayDate)) {
      sum.finalCost -= allowence.amount; // For real money this would probably use decimal.js with proper rounding
      sum.allowanceUsed += allowence.amount;
      sum.appliedSubsidies.push(allowance);
    }
    if (allowence.type === 'week' && isEqualWeek(allowence.week, todayDate)) {
      sum.finalCost -= allowence.amount;
      sum.allowanceUsed += allowence.amount;
      sum.appliedSubsidies.push(allowance);
    }
    // ...rest of different type of subsidies, coupons etc

    return sum;
  }, sum);
}
```

The active subsidies for a given user would be stored in a separate table. We might want to keep this append only too, but that's negotiable if the data is update heavy. It's probably easier and more efficient to duplicate the data into the transaction ledger anyway then relying on transactions. This would make data analysis easier too and could help in problems that would arise from accidentally forgeting to use transactions etc.

For convenience of the frontend we could provide a API endpoint that returns the users balance at a given moment applied with subsidies.
Additionally this can be a virtual field or method on the DB schema of the user.

## An example DB schema based on the above

### items

- id: primary key
- price: number

### users

- id: primary key
- balance: number
- active_subsidies: virtual (calculated using the subsidies table)
- balance_with_subsidies: virtual (calculated using the subsidies table)

### subsidies: active and previous subsidies

- id: primary key
- user: foreign key
- amount: number
- type: Enum(day, week, month)
- days: Enum(Mon, Tue, etc...) # available based on type
- weeks: Enum(1, 2, etc...) # available based on type
- months: Enum(Mon, Tue, etc...) # available based on type
- created_at
- valid_until
- valid

### audit_log: an append only ledger of purchases and top-ups including refunds

- id: primary key
- user: foreign key
- type: Enum(order, topup, refund, etc.)
- amount: number # always the final
- created_at: date # automatic
- base_cost: number # if this is an order
- list_of_applied_subsidies: JSON # if this is an order, duplicate the data here for convenience and efficiency
- subsidies_amount: number # if this is an order, duplicate the data here for convenience and efficiency
- items: JSON # for convenience of data analysis

## Example transactions

### TopUp - _Top up their credits._

```js
// using http://docs.sequelizejs.com for example transactions

function TopUp(user_id, amount) {
  return sequelize.transaction(t => {
    return (
      User.findByPk(user_id, { transaction: t })
        .then(user =>
          user.update(
            {
              id: user_id,
              balance: user.balance + amount
            },
            { transaction: t }
          )
        )
        .then(user =>
          AuditLog.create(
            {
              user: user_id,
              amount: amount,
              type: 'topup'
            },
            { transaction: t }
          )
        )
        // NOTE the logging can be implemented as a hook http://docs.sequelizejs.com/manual/hooks.html but arguably that might be too tight coupling
        .then(result => {
          // Transaction has been committed
          // result is whatever the result of the promise chain returned to the transaction callback
        })
        .catch(err => {
          // Transaction has been rolled back
          // err is whatever rejected the promise chain returned to the transaction callback
        })
    );
  });
}
```

### Order - _Purchase items for days they are allowed to order (which will deduct their credit balance by the price of the item)._

```js
function Order(user_id, product) {
  return sequelize.transaction(t => {
    return User.findByPk(user_id, { transaction: t })
      .then(user => user.getSubsidies({where: {valid: true}})) // default population fn from sequelize
      .then(user => {
        return {
          user,
          cost: applyAllowence(user.subsidies, baseCost, todayDate) // applying this could be optional
        };
      })
      .then(({user, cost}) =>
        if (cost < 0) throw new InsufficientFundsError()
        return user.update(
          {
            id: user_id,
            balance: user.balance - cost.finalCost
          },
          { transaction: t }
        )
      )
      .then(user => {
        // ... update stock etc.
      })
      .then(user =>
        AuditLog.create(
          {
            user: user_id,
            amount: cost.finalCost,
            type: 'order',
            baseCost: cost.baseCost,
            listOfAppliedSubsidies: cost.appliedSubsidies,
            allowanceUsed: cost.allowanceUsed
          },
          { transaction: t }
        )
      )
      .then(result => {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
      })
      .catch(err => {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
      });
  });
}
```

### Create Subsidy - _Be allocated days of the week they are allowed to order food (eg. Monday, Thursday) and be allocated subsidies described in [README-FULLSTACK.md](./README-FULLSTACK.md)_

```js
function CreateSubsidy(user_id, amount, type, details) {
  return Subsidies.create({
    user: user_id,
    amount,
    type,
    days: type === 'days' ? details.days : undefined,
    weeks: type === 'weeks' ? details.weeks : undefined,
    months: type === 'months' ? details.months : undefined
  });
}
```

### UserActiveSubsidies - _See their balance, and the total subsidy available to spend each day._

```js
// a method on every user
User.prototype.getActiveSubsidies = function(t) {
  return Subsidies.findAll(
    { user: this.id, valid: true },
    { transaction: t }
  ).then(subsidies => {
    const sum = {
      balance: this.balance,
      appliedSubsidies: []
    };
    // add the modified balance field on the user
    user.balanceWithActiveSubsidies = subsidies.reduce((sum, allowence) => {
      if (
        allowence.type === 'day' &&
        isEqualWeekDay(allowence.day, todayDate)
      ) {
        sum.balance += allowence.amount;
        sum.appliedSubsidies.push(allowance);
      }
      if (allowence.type === 'week' && isEqualWeek(allowence.week, todayDate)) {
        sum.balance += allowence.amount;
        sum.appliedSubsidies.push(allowance);
      }
      // ...rest of different type of subsidies, coupons etc

      return sum;
    }, sum);

    return user;
  });
};

// use as
Users.findByPk(user_id).then(user => user.getActiveSubsidies());
```

## REST API

I would argue for graphQL for greenfield projects since it enforces good api conventions and static typing provides an always up to date documentation. An example CRUD REST api however could look like this, with pagination, population, field and selection modifiers available (where these are limited based on authenticated user roles)

### example pagination

`GET /v1/users?limit=10&offset=0`

### example population

`GET /v1/users?populate=subsidies`

### example field selection

`GET /v1/users?fields=id,balance`

### example CRUD methods

#### create

```
POST /v1/subsidies - { user: 101, "amount": 10, "type": "day", "days": ["Mon", "Tue"] }
```

#### find

```
GET /v1/users
GET /v1/users/id/:id
GET /v1/users/ids/:ids
GET /v1/users/id/:id?populate=balance_with_active_subsidies
```

#### update

```
PUT /v1/users/id/:id - { "name": 'Michelle' }
PUT /v1/users/ids/:ids
```

### example irregular methods

```
POST /v1/order - { "applySubsidies": true, "product_id": 101 } // this especially needs a lot more thinking
POST /v1/topup - { "amount": 102 }
```

The convention based syntax of these however tend to become inconsistent over time. An RPC like interface might be easier to keep to, even for CRUD:

```
POST /api
{
  "method": "order",
  "version": 2,
  "data": {
    "applySubsidies": true,
    "product_id": 101
  }
}
```
