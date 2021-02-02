import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import StarRating from '../src/components/StarRating';

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

const rating = 4;
const ratingCount = '13';

it('Should render correctly', () => {
  const tree = renderer
    .create(<StarRating rating={rating} ratingCount={ratingCount} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Star Rating Rendering', () => {
  const wrapper = mount(<StarRating rating={rating} ratingCount={ratingCount} />);
  it('Should render five stars', () => {
    expectChai(wrapper.find('#star')).to.be.lengthOf(5);
  });
  it('Should render the correct ratingCount', () => {
    const priceWrapper = wrapper.find('.item-rating-count');
    expectChai(priceWrapper.text()).to.equal(ratingCount);
  });
});
