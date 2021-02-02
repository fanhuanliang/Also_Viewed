import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import renderer from 'react-test-renderer';
import Item from '../src/components/Item';
import StarRating from '../src/components/StarRating';

const item = {
  productId: 1,
  photoURL: 'https://www.rei.com/media/product/148949?size=280',
  brandName: 'Manduka',
  itemName: 'Lean Cork Block',
  itemRating: 5,
  itemPrice: '$16.00',
  ratingCount: 2,
};

it('Should render correctly', () => {
  const tree = renderer
    .create(<Item item={item} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('View Item Rendering', () => {
  const wrapper = shallow(<Item item={item} />);
  it('should render two (item-name, item-brand) divs', () => {
    expectChai(wrapper.find('.item-name')).to.be.lengthOf(1);
    expectChai(wrapper.find('.item-brand')).to.be.lengthOf(1);
  });
  it('should render one image', () => {
    expectChai(wrapper.find('img')).to.be.lengthOf(1);
  });
  it('should render StarRating once', ()=> {
    expectChai(wrapper.find(StarRating)).to.be.lengthOf(1);
  });
  it('should render one item-price dev', () => {
    expectChai(wrapper.find('.item-price')).to.be.lengthOf(1);
  });
});
