import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import { Banner } from '../../../../components/Home/Banner';

configure({ adapter: new Adapter() });

describe('<Banner />', function() {
    const props = {title:'title', imgUrl:'url'};
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Banner featured={props}/>);
    });

    it('should render <h1 />', function() {
        expect(wrapper.find('h1')).to.have.length(1);
    });

    it('should render <h1 /> with title provided', function() {
        expect(wrapper.find('h1').text()).to.be.equal(props.title);
    });

    it('should render <img />', function() {
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should render <img /> with src provided', function() {
        expect(wrapper.find('img').prop('src')).to.be.equal(`./mock/${props.imgUrl}`);
    });
});
