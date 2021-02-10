const Bought = require('../database/boughtModel.js');
// const Viewed = require('../database/viewedModel.js');
// const ViewedSchema = require('../database/viewedModel.js');

// const viewId = 1;

const fetchAlsoViewed = (id, callback) => {
  Bought.find({ _id: id }, (error, response) => {
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

const fetchBought = (id, callback) => {
  const boughtId = Math.floor(Math.random() * 3 + Number(id) + 1);
  // console.log(boughtId)
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
