let listings = [
  {
    id: 1,
    title: "General Hospital",
    time: "3:00 PM - 11:00 PM - 26/05/2021, Wed",
    place: "Chicago, IL 60637",
    department: "Urgent Care Department",
  },
  {
    id: 2,
    title: "North york hospital",
    time: "1:00 PM - 6:00 PM - 27/05/2021, Thu",
    place: "Chicago, IL 60637",
    department: "Surgery Department",
  },
  {
    id: 3,
    title: "Windsor hospital",
    time: "9:00 AM - 2:00 PM - 29/05/2021, Sat",
    place: "Windsor, L1M8H2",
    department: "Health Department",
  },
  {
    id: 4,
    title: "General Windsor hospital",
    time: "10:00 AM - 4:00 PM - 01/06/2021, Tue",
    place: "Windsor, K4U7G1",
    department: "Emergency Department",
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const deleteListing = (id) =>
  (listings = listings.filter((item) => item.id !== id));

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
  deleteListing,
};
