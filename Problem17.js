db.rides.insertMany([
  { ride_id: 1, rider_name: "Asha", driver_name: "Ravi", pickup_location: "A", drop_location: null, ride_date: "2026-04-30", distance_km: 5, fare: 150, ride_status: "Requested" },
  { ride_id: 2, rider_name: "Rahul", driver_name: "Dev", pickup_location: "B", drop_location: "C", ride_date: "2026-04-29", distance_km: 15, fare: 400, ride_status: "Completed" },
  { ride_id: 3, rider_name: "Neha", driver_name: "Amit", pickup_location: "D", drop_location: null, ride_date: "2026-04-30", distance_km: 8, fare: 200, ride_status: "Requested" },
  { ride_id: 4, rider_name: "Kiran", driver_name: "Raj", pickup_location: "E", drop_location: "F", ride_date: "2023-01-01", distance_km: 12, fare: 350, ride_status: "Cancelled" },
  { ride_id: 5, rider_name: "Priya", driver_name: "Sam", pickup_location: "G", drop_location: "H", ride_date: "2026-04-30", distance_km: 20, fare: 500, ride_status: "Completed" }
]);

db.rides.find({ ride_status: "Requested", ride_date: "2026-04-30" });
db.rides.updateMany({ drop_location: { $ne: null } }, { $set: { ride_status: "Completed" } });
db.rides.deleteMany({ ride_status: "Cancelled", ride_date: { $lt: "2024-06-01" } });
db.rides.find({ distance_km: { $gt: 10 }, fare: { $gt: 300 } });
