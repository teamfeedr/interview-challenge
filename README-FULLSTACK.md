# Fullstack Challenge (1-2hrs)

An accounting system is needed where users can purchase 'credits' to order food (£1 = 1 credit) on specific days of the
week (Mon-Fri).

Users credits can be subsidised in any combination (or none) of the following ways:

- A credit allowance per day.
- A credit allowance per week.
- A credit allowance per month.

Design a REST API and database schema which reflects the following spec:

Users can:
- Be allocated days of the week they are allowed to order food (eg. Monday, Thursday).
- Top up their credits.
- Purchase items for days they are allowed to order (which will deduct their credit balance by the price of the item).
- See their balance, and the total subsidy available to spend each day.

Assume users are referenced by a `user.id` field, and items are referenced by an `item.id` field. Each item has
`item.price` in credits.

There are many possible designs that would meet the spec. We are not looking for a specific answer, but a well-thought
out solution.

Please complete `FULLSTACK-NOTES.md` with your details and any additional notes outlining your thought process.
You're free to write your solution as the notes, or present it however you feel best. Your notes will be used to create
talking points during your interview.

You do not need to worry about validation or payment processing.

You do not need to build the API or database. A well-communicated, qualitative answer is all that is needed.

If you have any questions or would like to clarify any details, please email ash@teamfeedr.com.

Good luck!
