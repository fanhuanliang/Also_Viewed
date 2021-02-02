import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import Item from '../src/components/Item';
import usersViewed from '../data/usersViewed';
import Page from '../src/components/Page';

const dataTwo = usersViewed.slice(5, usersViewed.length);
const dataOne = usersViewed.slice(0, 6);
const page = 0;

it('Should render correctly', () => {
  const tree = renderer
    .create(<Page data={dataOne} page={page} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should render six items', () => {
  const wrapper = shallow(<Page data={dataOne} page={page} />);
  expectChai(wrapper.find(Item)).to.be.lengthOf(6);
});