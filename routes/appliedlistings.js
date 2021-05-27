const express = require("express");
const router = express.Router();

const store = require("../store/appliedlistings");

router.get("/", (req, res) => {
  const listings = store.getAppliedListings();
  res.send(listings);
});

router.post(
  "/",
  [],

  async (req, res) => {
    const listing = {
      title: req.body.title,
      time: req.body.time,
      place: req.body.place,
      department: req.body.department,
    };
    if (req.user) listing.userId = req.user.userId;
    store.addAppliedListing(listing);
    res.status(201).send(listing);
  }
);

module.exports = router;
