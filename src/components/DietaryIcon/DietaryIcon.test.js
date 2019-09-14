import React from 'react';
import {shallow} from 'enzyme';

import DieataryIcon from './DietaryIcon';

describe('the DietaryIcon component', () => {
    it('renders with a diet', () => {
        const dietaryIcon = shallow(<DieataryIcon diet={'ti'}/>);
        expect(dietaryIcon).toMatchSnapshot();
    })
})