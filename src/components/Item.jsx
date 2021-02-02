/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from './StarRating';

const ItemWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 55px;
  position: relative;
  z-index: 1;
`;

const Item = ({ item }) => {
  const stringArr = item.itemName.split(' ');
  const ratingCount = ` (${item.ratingCount})`;
  const ip = item.itemPrice;
  const stringOne = [];
  const stringTwo = [];

  // Logic to filter item price by reg Vs sale item //
  let price;
  if (ip.length < 8 || ip[6] !== ' ') {
    price = <label className="item-price">{ip}</label>;
  } else {
    const priceArr = ip.split(' ');
    const priceOne = ` ${priceArr[0]}`;
    const priceTwo = ` ${priceArr[1]}`;
    price = (
      <div>
        <label className="item-sale-discount">{priceOne}</label>
        <label className="item-sale-price">{priceTwo}</label>
      </div>
    );
  }

  // Logic to filter the itemName to format in a nice fashion //
  if (stringArr[0].length > 8 && stringArr.length === 2) {
    stringOne.push(stringArr[0]);
    stringTwo.push(stringArr[1]);
  } else if (stringArr[0].length > 8 && stringArr.length === 3) {
    stringOne.push(stringArr[0]);
    stringTwo.push(stringArr[1], stringArr[2]);
  } else {
    for (let i = 0; i < stringArr.length; i += 1) {
      if (i < 2) {
        stringOne.push(stringArr[i]);
      } else {
        stringTwo.push(stringArr[i]);
      }
    }
  }

  return (
    <>
      <ItemWrapper>
        <img src={item.photoURL} alt="" className="also-viewed-img" />
        <div>
          <div className="item-name">
            <div className="item-brand">{item.brandName}</div>
            {stringOne.join(' ')}
            <br />
            {stringTwo.join(' ')}
          </div>
          <StarRating rating={item.itemRating} ratingCount={ratingCount} />
          {price}
        </div>
      </ItemWrapper>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
