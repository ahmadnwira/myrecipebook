import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { List } from '../../../../../components/RecipeDetails/List/List';

configure({ adapter: new Adapter() });

describe('<List />', function() {

    it('renders <Element /> correctly when unordered', function() {
        const wrapper = shallow(<List data={['a', 'b']} isOrdered={false}/>);
        expect(wrapper.find('Element')).to.have.length(2);
    });

    it('renders <Element /> correctly when ordered', function() {
        const wrapper = shallow(<List data={['a', 'b']} isOrdered={false}/>);
        expect(wrapper.find('Element')).to.have.length(2);
    });

    it('renders ordered list', function() {
        const ordered = shallow(<List data={['a', 'b']} isOrdered={true}/>);
        expect(ordered.find('ol')).to.have.length(1);
    });

    it('renders unordered list', function() {
        const notOrdered = shallow(<List data={['a', 'b']} isOrdered={false}/>);
        expect(notOrdered.find('ul')).to.have.length(1);
    });
});