import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { RecipesList } from '../../../../../components/Home/Recipes/RecipesList';

configure({ adapter: new Adapter() });

describe('<RecipesList />', function() {
    const recipesArray = [
        {title: 'title', imgUrl:'imgUrl', url: 'url'},
        {title: 'title', imgUrl:'imgUrl', url: 'url'},
        {title: 'title', imgUrl:'imgUrl', url: 'url'}
    ];

    it('should render list of <Recipe /> component given array', function() {
        let wrapper = shallow(<RecipesList recipes={recipesArray} />);
        expect(wrapper.find('Recipe')).to.have.length(3);
    });
});