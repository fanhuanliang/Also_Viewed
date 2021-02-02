/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  overflow: contained;
`;

const Page = styled.div`
  flex: 0 0 auto;
  opacity: ${(props) => props.active ? 1 : 0};
  transition: all 500ms ease;
  width: 100%;
`;

const Pages = styled.div`
  display: flex;
  ${(props) => props.currentPage
    && css` transform: translateX(-${props.currentPage * 100}%);`};
  transition: all 700ms ease;
`;

const Slider = ({ children, currentPage }) => {
  const activePage = children.map((page, i) => (
    <Page active={currentPage === i} key={i}>
      {page}
    </Page>
  ));

  return (
    <div>
      <FlexBox className="flex-box">
        <Pages currentPage={currentPage} className="pages">
          {activePage}
        </Pages>
      </FlexBox>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Slider;
