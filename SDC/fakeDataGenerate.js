/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable import/newline-after-import */
/* eslint-disable max-len */
/* eslint-disable semi */
/* eslint-disable quote-props */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
const faker = require('faker');
const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// const writer = csvWriter();

const seed = (n, number) => {
  let items = [];
  // writer.pipe(fs.createWriteStream(`data${n}.json`));

  // let arr = [1, 1, number, number * 2, number * 3, number * 4, number * 5, number * 6, number * 7, number * 8, number * 9, number * 10]
  let arr = [1, 1];
  for (let k = 1; k < 51; k++) {
    arr.push(number * k)
  }
  number = number * n

  for (let i = arr[n]; i < number; i++) {
    let productName = faker.commerce.productName();
    let _id = i;
    let related = [];
    for (let j = 0; j < 11; j++) {
      const ratingArr = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
      let itemPrice = faker.commerce.price(10, 99, 2, '$');
      let productId = j + 1;
      let randomNumber = Math.floor(Math.random() * 999);
      let photoURL = `https://sdc-rei.s3-us-west-1.amazonaws.com/photo/img-${randomNumber}.png`;
      let brandName = faker.commerce.productName();
      let itemName = faker.commerce.product();
      let itemRating = ratingArr[faker.random.number({ 'min': 1, 'max': 10 })];
      let ratingCount = Math.floor(Math.random() * 100);
      if (j === Math.floor(Math.random() * 10)) {
        itemPrice = `${faker.commerce.price(10, 50, 2, '$')} ${itemPrice}`;
      }
      related.push({
        'productId': productId,
        'photoURL': photoURL,
        'brandName': brandName,
        'itemName': itemName,
        'itemRating': itemRating,
        'ratingCount': ratingCount,
        'itemPrice': itemPrice,
      });
    }
    items.push({
      'productName': productName,
      '_id': _id,
      'related': related,
    });
    console.log(i)
  }
  fs.writeFileSync(`./SDC/json/data${n}.json`, JSON.stringify(items, null, 2), 'utf-8');
  return items;
};

for (let i = 1; i < 35; i++) {
  seed(i, 300000)
}
