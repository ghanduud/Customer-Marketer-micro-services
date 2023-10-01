const asyncHandler = require("express-async-handler");
const produce = require("../producers/marketerProducer");
const Offer = require("../models/offerModel");

const createOffer = asyncHandler(async (req, res) => {
  const offerBody = req.body.offer;
  const amountBody = req.body.amount;
  if (!offerBody || !amountBody) {
    res.status(400);
    throw new Error("Please add an offer and an amount to create an offer");
  }
  const offer = new Offer(offerBody, amountBody, res);
  produce(offer, false);
  res.status(200).json(offer);
});

const deleteOffer = asyncHandler(async (req, res) => {
  const offerBody = req.body.offer;
  const amountBody = req.body.amount;
  if (!offerBody || !amountBody) {
    res.status(400);
    throw new Error("Please add an offer and an amount to create an offer");
  }
  const offer = new Offer(offerBody, amountBody, res);
  produce(offer, true);
  res.status(200).json(offer);
});

module.exports = {
  createOffer,
  deleteOffer,
};
