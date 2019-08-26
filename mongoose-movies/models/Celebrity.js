const mongoose = require("mongoose");
const { Schema } = mongoose;

const celebritySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    occupation: {
      type: String,
      enum: ["actor", "singer", "comedian", "unknown"],
      required: true
    },
    catchPhrase: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
