import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import Slider from '../src/components/Slider';
import usersViewed from '../data/usersViewed';
import Page from '../src/components/Page';

const dataTwo = usersViewed.slice(5, usersViewed.length);
const dataOne = usersViewed.slice(0, 6);
const page = 0;

const children = [
  <Page data={dataOne} page={page} />,
  <Page data={dataTwo} page={page} />,
];

describe('Should render the correct content', () => {
  const wrapper = shallow(<Slider currentPage={page} children={children} />);
  it('Should render one flex-box styled div', () => {
    expectChai(wrapper.find('.flex-box')).to.be.lengthOf(1);
  });
  it('Should render one pages styled div', () => {
    expectChai(wrapper.find('.pages')).to.be.lengthOf(1);
  });
});