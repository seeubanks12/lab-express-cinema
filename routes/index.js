const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", function (req, res) {
  Movie.find()
    .then((results) => {
      console.log("Movies found:", {allMovies: results});
      res.render("movies", {movies: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/movie-details/:id", function (req, res) {
    Movie.findById(req.params.id)
    .then((results) => {
        console.log("Movie here!", results);
        res.render("movie-details", results);
    })
})

module.exports = router;
