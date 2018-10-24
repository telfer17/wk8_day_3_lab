use bucketlist;
db.dropDatabase();

db.to_do.insertMany([
  {
    activity: "Skydiving",
    location: "Dubai",
  },
  {
    activity: "Great Barrier Reef",
    location: "Australia"
  },
  {
    activity: "Machu Pichu",
    location: "Peru"
  }
]);
