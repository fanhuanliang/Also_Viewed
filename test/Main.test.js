import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import Main from '../src/components/Main';
import Slider from '../src/components/Slider';

it('Should render correctly', () => {
  const tree = renderer
    .create(<Main />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Should render the correct content', () => {
  const wrapper = shallow(<Main />);
  it('Should render the viewed-container', () => {
    expectChai(wrapper.find('.container-viewed')).to.be.lengthOf(1);
  });
  it('Should render the bought-container', () => {
    expectChai(wrapper.find('.container-bought')).to.be.lengthOf(1);
  });
  it('Should render two sliders', () => {
    expectChai(wrapper.find(Slider)).to.be.lengthOf(2);
  });
  it('Should render one button-view button on load', () => {
    expectChai(wrapper.find('.button-view')).to.be.lengthOf(1);
  });
  it('Should render one hidden-view button on load', () => {
    expectChai(wrapper.find('.hidden-view')).to.be.lengthOf(1);
  });
  it('Should render one button-bought button on load', () => {
    expectChai(wrapper.find('.button-bought')).to.be.lengthOf(1);
  });
  it('Should render one hidden-bought button on load', () => {
    expectChai(wrapper.find('.hidden-bought')).to.be.lengthOf(1);
  });
});


describe('User interface', () => {
  const wrapper = shallow(<Main />);
  it('Should render one view button when one view button is clicked', () => {
    wrapper.find('.button-view').simulate('click');
    expectChai(wrapper.find('.button-view')).to.be.lengthOf(1);
  });
  it('Should render one bought button when one view button is clicked', () => {
    wrapper.find('.button-bought').simulate('click');
    expectChai(wrapper.find('.button-bought')).to.be.lengthOf(1);
  });
});