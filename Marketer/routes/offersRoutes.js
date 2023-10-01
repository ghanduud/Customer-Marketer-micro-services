const express = require("express");
const { createOffer, deleteOffer } = require("../controllers/offerController");

const router = express.Router();

router.route("/").post(createOffer).delete(deleteOffer);

module.exports = router;
