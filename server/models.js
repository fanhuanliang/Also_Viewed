const Bought = require('../database/boughtModel.js');
// const Viewed = require('../database/viewedModel.js');
// const ViewedSchema = require('../database/viewedModel.js');

const viewId = 1;

const fetchAlsoViewed = (callback) => {
  Bought.find({ _id: viewId }, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  });
};

const fetchAllBought = (callback) => {
  Bought.find({}, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  });
};

const fetchBought = (callback) => {
  const boughtId = Math.floor(Math.random() * 3 + (viewId + 1));
  // const random = Math.floor(Math.random() * 3);
  Bought.find({ _id: boughtId }, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  });
};

module.exports = {
  fetchAlsoViewed, fetchAllBought, fetchBought,
};
