class Offer {
  constructor(offer, amount, res) {
    let amountNumber = Number(amount);
    if (isNaN(amountNumber)) {
      res.status(400);
      throw new Error("Please add a valid value for the amount ( number )");
    } else {
      this.amount = amountNumber;
    }
    this.offer = offer;
  }
}

module.exports = Offer;
