const Bought = require('../database/boughtModel.js');
const Viewed = require('../database/viewedModel.js');

const fetchAlsoViewed = (callback) => {
  Viewed.find({}, (error, response) => {
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
  const random = Math.floor(Math.random() * 3);
  Bought.find({ identifier: random }, (error, response) => {
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
