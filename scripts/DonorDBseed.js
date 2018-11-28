const mongoose = require("mongoose");
const db = require("../models");

// ******************Change Below once you finish your Routes*************

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const donorSeed = [
  {
    name: "John Smith",
    email: "John.Smith@email.com",
    address:"123 Easy Street",
    ownedTickets: 25
  },
  {
    name: "Jenny Johnson",
    email: "Jenny.Johnson@email.com",
    address:"555 Road Street",
    ownedTickets: 55
  }, 
  {
    name: "Rico Diago",
    email: "Rico.Diago@email.com",
    address:"467 Mexico Way",
    ownedTickets: 02
  },
  {
    name: "Arthur Morgan",
    email: "Arthur.Morgan@email.com",
    address:"643 Read Dead Lane",
    ownedTickets: 0
  },
  {
    name: "Sally Tucci",
    email: "Sally.Tucci@email.com",
    address:"765 Monroe Ave",
    ownedTickets: 30
  },
  {
    name: "Rachel Achel",
    email: "Rachel.Achel@email.com",
    address:"893 Park Place",
    ownedTickets: 100
  },
  {
    name: "Mickey Mouser",
    email: "Mickey.Mouser@email.com",
    address:"987 Steamboat View",
    ownedTickets: 25
  },
  {
    name: "Tywin Jones",
    email: "Tywin.Jones@email.com",
    address:"543 Lannister Lane",
    ownedTickets: 25
  },
];

db.Donor
  .remove({})
  .then(() => db.Donor.collection.insertMany(donorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
