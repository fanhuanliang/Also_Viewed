const connection = require('./database/connection');
const usersBought = require('./data/usersBought');
const Bought = require('./database/boughtModel');
const fs = require('fs');

// const data1 = JSON.parse(fs.readFileSync('./SDC/json/data1.json'));
// const data2 = JSON.parse(fs.readFileSync('./SDC/json/data2.json'));
// const data3 = JSON.parse(fs.readFileSync('./SDC/json/data3.json'));
// const data4 = JSON.parse(fs.readFileSync('./SDC/json/data4.json'));
// const data5 = JSON.parse(fs.readFileSync('./SDC/json/data5.json'));
// const data6 = JSON.parse(fs.readFileSync('./SDC/json/data6.json'));
// const data7 = JSON.parse(fs.readFileSync('./SDC/json/data7.json'));
// const data8 = JSON.parse(fs.readFileSync('./SDC/json/data8.json'));
// const data9 = JSON.parse(fs.readFileSync('./SDC/json/data9.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data11 = JSON.parse(fs.readFileSync('./SDC/json/data11.json'));
// const data12 = JSON.parse(fs.readFileSync('./SDC/json/data12.json'));
// const data13 = JSON.parse(fs.readFileSync('./SDC/json/data13.json'));
// const data14 = JSON.parse(fs.readFileSync('./SDC/json/data14.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data10 = JSON.parse(fs.readFileSync('./SDC/json/data10.json'));
// const data2 = JSON.parse(data1)
const dropMongo = async () => {
  console.log('Clearing out models...', '\n');
  await Bought.deleteMany();
  // await Viewed.deleteMany();
  console.log('Models cleared...', '\n');
};

// const seedViewed = async () => {
//   console.log('Seeding viewedModel...', '\n');
//   try {
//     await Viewed.insertMany(usersViewed);
//     console.log('Success: Seeded viewedModel!...', '\n');
//   } catch (error) {
//     console.log(`Error! ${error}...`);
//   }
// };

const seedBought = async () => {
  console.log('Seeding boughtModel...', '\n');
  try {
    for (let i = 1; i< 35; i++) {
      console.log(i)
      await Bought.insertMany(JSON.parse(fs.readFileSync(`./SDC/json/data${i}.json`)));
    }
    console.log('Success: Seeded boughtModel!...', '\n');
  } catch (error) {
    console.log(`Error! ${error}...`);
  }
};

const seed = async () => {
  await dropMongo();
  // await seedViewed();
  await seedBought();
  process.exit(0);
};

seed();
