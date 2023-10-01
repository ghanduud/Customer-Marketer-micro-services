const mongoose = require("mongoose");

const offerSchema = mongoose.Schema(
  {
    offer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Offer", offerSchema);
