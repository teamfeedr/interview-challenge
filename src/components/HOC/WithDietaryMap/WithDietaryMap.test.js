import React from "react";
import { shallow } from "enzyme";

import WithDietaryMap from './WithDietaryMap';
import items from '../../../items';

describe('the WithDietaryMap HOC', () => {
    it('renders a wrapped component with a dietary Map', () => {
        const TestComponent = () => {return (<div/>)};
        
        const rendered = shallow(<WithDietaryMap items={items} WrappedComponent={TestComponent}/>)

        expect(rendered).toMatchSnapshot();
    })
})