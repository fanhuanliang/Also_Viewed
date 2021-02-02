const connection = require('./database/connection');
const usersViewed = require('./data/usersViewed');
const usersBought = require('./data/usersBought');

const Bought = require('./database/boughtModel');
const Viewed = require('./database/viewedModel');

const dropMongo = async () => {
  console.log('Clearing out models...', '\n');
  await Bought.deleteMany();
  await Viewed.deleteMany();
  console.log('Models cleared...', '\n');
};

const seedViewed = async () => {
  console.log('Seeding viewedModel...', '\n');
  try {
    await Viewed.insertMany(usersViewed);
    console.log('Success: Seeded viewedModel!...', '\n');
  } catch (error) {
    console.log(`Error! ${error}...`);
  }
};

const seedBought = async () => {
  console.log('Seeding boughtModel...', '\n');
  try {
    await Bought.insertMany(usersBought);
    console.log('Success: Seeded boughtModel!...', '\n');
  } catch (error) {
    console.log(`Error! ${error}...`);
  }
};

const seed = async () => {
  await dropMongo();
  await seedViewed();
  await seedBought();
  process.exit(0);
};

seed();
