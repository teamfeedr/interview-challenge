# Feedr Technical Challenge Solution by Andreas Goodstein

I've highlighted some of the technical changes I've made to the solution. As well as my thoughts on some of the aspects of the challenge. Overall I've had a focus on clean code and separation of state management and display logic. Unit test coverage has been kept above 90%.

* Updated dependencies to eliminate vulnerability issues. This also enables the use of React Hooks for easier state management. React Hooks provide a lightweight and easy way to use internal component state. Using a framework such as Redux or MobX was deemed too overkill for this simple application.

* Added proptypes for component type validation.

* Moved jest setup to separate file for more concise test files.

Missing features

* Unit tests for item click handles in the Menu and Preview components (these have been tested manually though)

* Persistance of state in local storage seems an obvious next step, but have been omitted for now

Additional notes

The given estimate for this task of ~1 hour seems to have been quite optimistic. I doubt even the visual templates for the components could be done in this time frame, let alone the logic and testing. I've opted to use more time - around 5 hours - to make sure that quality was front and center.
