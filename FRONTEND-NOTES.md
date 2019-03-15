Name: Peter Kadlot
Email: -
Time to complete: ~2:10

TODO:

- [x] Populate items in the left-hand sidebar with data from items.js.
- [x] Allow users to select items in the left-hand sidebar, and have them appear in the Menu Preview on the right hand side.
- [x] Be able to remove items from the menu by clicking the (x)
- [x] Show the total number of selected items in the header
- [x] Show the total number of each dietary type selected in the header

Notes:

- I assume uniqueness in created menus
- Should selected items be disabled or removed? (I guess hidden with drag and drop)
- What should be the order of elements?

Future improvements:

- Drag and drop
- Use Redux when the app grows: just add action creators and state selectors
- Adding Redux would help modularity since you can have multiple reducers on one action, then each component can own it's reducer eg: counters in the header
- There are a few css issues: clipping on left menu, height of header causes jumping
- Refactor with StyledComponents
- Load initial state from server
