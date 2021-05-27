const listings = [
  {
    id: 1,
    title: "Toronto Hospital",
    time: "7:00 AM - 5:00 PM - 28/05/2021, Fri",
    place: "Toronto, M2N1L8",
    department: "Medical Department",
  },
  {
    id: 2,
    title: "waterloo hospital",
    time: "12:00 PM - 6:00 PM - 29/05/2021, Sat",
    place: "Waterloo, N9B2M3",
    department: "Heart Department",
  },
];

const addAppliedListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getAppliedListings = () => listings;

const getAppliedListing = (id) => listings.find((listing) => listing.id === id);

const filterAppliedListings = (predicate) => listings.filter(predicate);

module.exports = {
  addAppliedListing,
  getAppliedListings,
  getAppliedListing,
  filterAppliedListings,
};
