const mongoose = require("mongoose");
const faker = require("faker");

// const Celebrity = require("../models/Celebrity");
// mongoose.connect("mongodb://localhost/celebrities", { useNewUrlParser: true });

// const celebrities = Array.from({ length: 4 }, () => ({
//   name: faker.name.firstName(),
//   occupation: "actor",
//   catchPhrase: faker.hacker.phrase()
// }));

// Celebrity.create(celebrities)
//   .then(celebrity => {
//     console.log("inserted fake data", celebrity);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });

const Movie = require("../models/Movie");
mongoose.connect("mongodb://localhost/movies", { useNewUrlParser: true });

const movies = Array.from({ length: 4 }, () => ({
  title: faker.name.firstName(),
  genre: faker.name.lastName(),
  plot: faker.hacker.phrase()
}));

Movie.create(movies)
  .then(movie => {
    console.log("inserted fake data", movie);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
