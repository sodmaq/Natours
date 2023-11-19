const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DataBasePassWord
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successflly...'));

//READ FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours.json`, 'utf-8')
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/users.json`, 'utf-8')
);
const review = JSON.parse(
  fs.readFileSync(`${__dirname}/review.json`, 'utf-8')
);


//IMPORT DATA
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully loaded ');
  } catch (err) {
    console.log(err);
  }
  process.exit();

};

//DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully deleted ');
  } catch (err) {
    console.log(err);
  }
  process.exit();

};


if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
