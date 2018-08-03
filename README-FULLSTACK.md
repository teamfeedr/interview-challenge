# Fullstack Challenge (1-2hrs)

An accounting system is needed where users can purchase 'credits' to order food (£1 = 1 credit) on specific days of the
week (Mon-Fri).

Users credits can also be subsidised in any combination (or none) of the following ways:

- A credit allowance per day.
- A credit allowance per week.
- A credit allowance per month.

On any given day a user's balance should reflect the amount of credits they've purchased plus any subsidies they may
have for that day. See the examples at the bottom of this doc for further context. 

Design a REST API and database schema which reflects the following spec:

Users can:

- Be allocated days of the week they are allowed to order food (eg. Monday, Thursday).
- Be allocated subsidies described above.
- Top up their credits.
- Purchase items for days they are allowed to order (which will deduct their credit balance by the price of the item).
- See their balance, and the total subsidy available to spend each day.

Assume users are referenced by a `user.id` field, and items are referenced by an `item.id` field. Each item has
`item.price` in credits.

There are many possible designs that would meet the spec. We are not looking for a specific answer, but a well-thought
out solution.

Please complete `FULLSTACK-NOTES.md` with your details and any additional notes outlining your thought process.
You're free to write your solution in the notes or present it however you feel best. Your notes will be used to create
talking points during your interview.

You do not need to worry about validation or payment processing.

You do not need to build the API or database or even write any code. A well-communicated, qualitative answer is all
that is needed. Code samples are welcome if you feel they will be helpful.

If you have any questions or would like to clarify any details, please email ash@teamfeedr.com.

Good luck!

## Examples

- User A is allowed a 3 credit subsidy to spend every Monday and can only order food on Mondays.
- User B is allowed a 15 credit subsidy to spend every week, a 10 credit subsidy to spend every Friday, and can order food Monday-Friday.
- User C has no subsidy and can order food Monday-Friday

In all cases, users A, B, and C can purchase their own credits too.

If User A purchases 10 credits, she would have 13 credits to spend on Monday (10 credits + 3 subsidy). If she bought an
item for 5 credits, it would first use her 3 credit subsidy, plus 2 of her own credits (leaving her with 10 - 2 = 8
credits). Next Monday she would have 11 credits to spend (8 + 3), and so on.

User B is allowed 15 credits every week. On Monday he can spend up to 15 credits (plus any credits he’s purchased
separately, like with User A). If he spends 3 credits on Monday, he has 12 credits to spend on Tuesday (plus any
purchased credits) and so on. On Friday he has 10 credits + (remaining amount of weekly allowance) + (any credits he’s
purchased separately).

User C has no subsidy, so can top up and spend her credits as she likes. 
