const connection = require('./database/connection');
const usersBought = require('./data/usersBought');
const Bought = require('./database/boughtModel');
const fs = require('fs');

const dropMongo = async () => {
  console.log('Clearing out models...', '\n');
  await Bought.deleteMany();
  console.log('Models cleared...', '\n');
};

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
  await seedBought();
  process.exit(0);
};

seed();
