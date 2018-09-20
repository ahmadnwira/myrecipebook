import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Recipe } from '../../../../../components/Home/Recipes/Recipe';

configure({ adapter: new Adapter() });

describe('<Recipe />', function() {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Recipe key={12}
                title="title"
                imgUrl="img.url"
                url="recipe.url"/>
        );
    });

    it('should render Link with provided url', function() {
        expect(wrapper.find('Link').prop('to')).to.be.equal('recipe.url');
    });

    it('should render image with provided src', function() {
        expect(wrapper.find('img').prop('src')).to.have.equal('./mock/img.url');
    });

    it('should render <h4 /> with provided title', function() {
        expect(wrapper.find('h4').text()).to.be.equal('title');
    });

});
