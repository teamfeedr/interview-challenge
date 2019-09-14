import React from 'react';
import {shallow} from 'enzyme';

import Summary from './Summary';

describe('the Summary component', () => {
    it('renders with dietaryMap and selectedCount', () => {
        const dietaryMap = new Map([
            ['vg', 2],
            ['gf', 1],
            ['v', 65]
        ]);

        const rendered = shallow(<Summary dietaryMap={dietaryMap} selectedCount={3} />);
        
        expect(rendered).toMatchSnapshot();
    })
})