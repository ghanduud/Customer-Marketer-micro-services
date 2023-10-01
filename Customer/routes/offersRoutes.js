const express = require("express");
const {
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
  getOffer,
} = require("../controllers/offerController");

const router = express.Router();

router.route("/").get(getOffers).post(createOffer);

router.route("/:id").put(updateOffer).delete(deleteOffer).get(getOffer);

module.exports = router;
