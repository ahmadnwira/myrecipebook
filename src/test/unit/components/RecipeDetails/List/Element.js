import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Element } from '../../../../../components/RecipeDetails/List/Element';

configure({ adapter: new Adapter() });

describe('<Element />', function() {
    it('renders ordered item', function() {
        const wrapper = shallow(<Element isOrdered={true} text="unordered"/>);
        expect(wrapper.find('.ordered-group-item')).to.have.length(1);
    });

    it('renders unordered item', function() {
        const wrapper = shallow(<Element isOrdered={false} text="ordered"/>);
        expect(wrapper.find('.list-group-item')).to.have.length(1);
    });
});
