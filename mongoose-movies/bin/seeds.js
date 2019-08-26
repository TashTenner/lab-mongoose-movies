const mongoose = require("mongoose");
const faker = require("faker");

const Celebrity = require("../models/Celebrity");
mongoose.connect("mongodb://localhost/celebrities", { useNewUrlParser: true });

const celebrities = Array.from({ length: 4 }, () => ({
  name: faker.name.firstName(),
  occupation: "actor",
  catchPhrase: faker.hacker.phrase()
}));

// Celebrity.create(celebrities)

Celebrity.create(celebrities)
  .then(celebrity => {
    console.log("inserted fake data", celebrity);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });

// Celebrity.collection
//   .drop()
//   .then(() => {
//     console.log("deleted db");
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .then(() => Celebrity.insertMany(celebrities))
//   .then(() => {
//     console.log("inserted fake data");
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });
