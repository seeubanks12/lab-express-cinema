const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const movieSchema = new Schema({
    title: {
        type: String,
    },
    direction: {
        type: String,
    },
    stars: [{
        type: String,
    }],
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: {
        type: [String],
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});


//model


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie