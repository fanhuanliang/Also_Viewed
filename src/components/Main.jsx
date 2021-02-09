import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from './Slider';
import Page from './Page';

const LeftButton = styled.div`
  position: relative;
  left: 10px;
  top: 170px;
  z-index: 3;
`;

const RightButton = styled.div`
  position: relative;
  left: 1120px;
  bottom: 200px;
  z-index: 3;
`;

const ContainerView = styled.div`
  position: relative;
  top: -20px;
`;

const ContainerBought = styled.div`
  position: relative;
  top: -80px;
`;

const Main = () => {
  const [currentPageOne, setCurrentPageOne] = useState(0);
  const [currentPageTwo, setCurrentPageTwo] = useState(0);
  const [productName, setProductName] = useState('');
  const [pageOneData, setPageOneData] = useState([]);
  const [pageTwoData, setPageTwoData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/top-picks/fetch')
      .then((response) => {
        console.log(response.data);
        setPageOneData(response.data);
      })
      .catch((error) => {
        throw error;
      })
      .then(() => {
        axios.get('http://localhost:1337/api/ultimately-bought/fetch')
          .then((response) => {
            console.log(response.data);
            setPageTwoData(response.data[0].related);
            setProductName(` ${response.data[0].productName} `);
          })
          .catch((error) => {
            throw error;
          });
      });
  }, []);

  let viewBtnLeft;
  let viewBtnRight;
  let boughtBtnLeft;
  let boughtBtnRight;

  if (currentPageOne === 0) {
    viewBtnLeft = 'hidden-view';
    viewBtnRight = 'button-view';
  } else {
    viewBtnLeft = 'button-view';
    viewBtnRight = 'hidden-view';
  }

  if (currentPageTwo === 0) {
    boughtBtnLeft = 'hidden-bought';
    boughtBtnRight = 'button-bought';
  } else {
    boughtBtnLeft = 'button-bought';
    boughtBtnRight = 'hidden-bought';
  }

  return (
    <div className="main-view">
      <ContainerView className="container-viewed">
        <h1 className="title"> People Also Viewed </h1>
        <LeftButton>
          <button
            type="button"
            className={viewBtnLeft}
            onClick={() => { setCurrentPageOne(0); }}
          >
            <i className="fa fa-long-arrow-left" />
          </button>
        </LeftButton>

        <Slider currentPage={currentPageOne} className="slider">
          <Page data={pageOneData.slice(0, 6)} page={currentPageOne} />
          <Page data={pageOneData.slice(5, pageOneData.length)} page={currentPageOne} />
        </Slider>

        <RightButton>
          <button
            type="button"
            className={viewBtnRight}
            onClick={() => { setCurrentPageOne(1); }}
          >
            <i className="fa fa-long-arrow-right" />
          </button>
        </RightButton>
      </ContainerView>

      <ContainerBought className="container-bought">
        <h1 className="title">
          People shopping
          {productName}
          ultimately bought
        </h1>
        <LeftButton>
          <button
            type="button"
            className={boughtBtnLeft}
            onClick={() => { setCurrentPageTwo(0); }}
          >
            <i className="fa fa-long-arrow-left" />
          </button>
        </LeftButton>

        <Slider currentPage={currentPageTwo} className="slider">
          <Page data={pageTwoData.slice(0, 6)} page={currentPageTwo} />
          <Page data={pageTwoData.slice(5, pageTwoData.length)} page={currentPageTwo} />
        </Slider>

        <RightButton>
          <button
            type="button"
            className={boughtBtnRight}
            onClick={() => { setCurrentPageTwo(1); }}
          >
            <i className="fa fa-long-arrow-right" />
          </button>
        </RightButton>
      </ContainerBought>
    </div>
  );
};

export default Main;
