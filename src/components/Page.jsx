import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Item from './Item';

const Flex = styled.div`
  display: flex;
`;

const Page = ({ data, page }) => (
  <>
    <Flex>
      {data.map((item) => {
        const valid = page === 0 ? [1, 2, 3, 4, 5, 6] : [6, 7, 8, 9, 10, 11];
        if (valid.includes(item.productId)) {
          return <Item item={item} key={item.productId} />;
        }
      })}
    </Flex>
  </>
);

Page.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  page: PropTypes.number.isRequired,
};

export default Page;
