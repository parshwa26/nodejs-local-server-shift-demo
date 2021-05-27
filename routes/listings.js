const express = require("express");
const router = express.Router();

const store = require("../store/listings");

router.get("/", (req, res) => {
  const listings = store.getListings();
  res.send(listings);
});

router.post("/", [], async (req, res) => {
  const listing = {
    id: req.body.id,
  };
  if (req.body.id) store.deleteListing(req.body.id);
  res.status(201).send(listing);
});

module.exports = router;
