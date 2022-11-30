# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email nick@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)

# Notes
The biggest issue I have with my implementation is the overwriting of the items with filtered items in the item picker.
If I had time to re-do this challenge, I would go back to restructure the data to copy the full items across to the
selected items array, rather than just the IDs.

I was trying to avoid duplication of state, but once I reached the
filtering part I realised that I then could not reference the filtered items if I filtered the original array,
and I assume the correct behaviour of the filter is not to hide those items from the menu preview as well.

Fetching the filtered items within the ItemPicker component is a code smell IMO, but I would have had to go back
to the drawing board on a lot of what I had already done to avoid it and I simply didn't have time.
