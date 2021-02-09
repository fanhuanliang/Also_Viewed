/* eslint-disable no-shadow */
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

const writeUsers = fs.createWriteStream('data.csv');
writeUsers.write('productName,identifier,related\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let identifier = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      identifier += 1;
      let productName = faker.commerce.productName();
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
      related = JSON.stringify(related);
      const data = `${productName},${identifier},${related}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
})
