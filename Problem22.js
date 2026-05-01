db.itinerary.insertMany([
  { itinerary_id: 1, customer_name: "Asha", destination: "Goa", trip_start_date: "2026-06-01", trip_end_date: "2026-06-05", budget: 60000, activities: ["Beach","Trekking"], booking_status: "Confirmed" },
  { itinerary_id: 2, customer_name: "Rahul", destination: "Manali", trip_start_date: "2025-01-01", trip_end_date: "2025-01-05", budget: 40000, activities: ["Skiing"], booking_status: "Pending" },
  { itinerary_id: 3, customer_name: "Neha", destination: "Ooty", trip_start_date: "2026-02-01", trip_end_date: "2026-02-05", budget: 30000, activities: ["Trekking"], booking_status: "Confirmed" },
  { itinerary_id: 4, customer_name: "Kiran", destination: "Delhi", trip_start_date: "2023-01-01", trip_end_date: "2023-01-05", budget: 20000, activities: ["Tour"], booking_status: "Cancelled" },
  { itinerary_id: 5, customer_name: "Priya", destination: "Kerala", trip_start_date: "2026-07-01", trip_end_date: "2026-07-05", budget: 70000, activities: ["Boat","Trekking"], booking_status: "Confirmed" }
]);

db.itinerary.find({ booking_status: "Confirmed", budget: { $gt: 50000 } });
db.itinerary.updateMany({ trip_start_date: { $lt: "2026-01-01" } }, { $set: { booking_status: "Cancelled" } });
db.itinerary.deleteMany({ booking_status: "Cancelled", trip_end_date: { $lt: "2024-01-01" } });
db.itinerary.find({ activities: "Trekking" });
