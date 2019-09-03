const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    genre: {
      type: String,
      // enum: ["actor", "singer", "comedian", "unknown"],
      required: true
    },
    plot: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
