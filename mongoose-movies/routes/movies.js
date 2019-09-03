const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

/* GET Show a form to create a movie */
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

/* GET movies listing. */
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log("movies", movies);
      res.render("movies/index", { movies });
    })
    .catch(next);
});

/* GET movies details. */
router.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movie => {
      res.render("movies/show", { movie });
    })
    .catch(next);
});

router.post("/", (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(addedMovie => {
      res.redirect("movies");
    })
    .catch(error => {
      res.render("movies/new");
    });
});

router.post("/:movieId/delete", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findByIdAndDelete(movieId)
    .then(() => {
      res.redirect("movies");
    })
    .catch(next);
});

router.get("/:movieId/edit", (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then(movie => {
      res.render("movies/edit", { movie });
    })
    .catch(next);
});

router.post("/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: movieId },
    { $set: { title, genre, plot } },
    { new: true }
  )
    .then(() => {
      res.redirect(`/movies/${movieId}`);
    })
    .catch(next);
});

module.exports = router;
