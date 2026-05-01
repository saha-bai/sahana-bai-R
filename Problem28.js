db.bookings.insertMany([
  { booking_id: 1, event_name: "Concert", event_date: "2026-11-01", payment_status: "Paid", number_of_tickets: 2, booking_date: "2026-01-01" },
  { booking_id: 2, event_name: "Expo", event_date: "2026-12-01", payment_status: "Paid", number_of_tickets: 3, booking_date: "2026-01-02" },
  { booking_id: 3, event_name: "Show", event_date: "2023-01-01", payment_status: "Paid", number_of_tickets: 1, booking_date: "2023-01-01" },
  { booking_id: 4, event_name: "Meet", event_date: "2026-10-10", payment_status: "Pending", number_of_tickets: 5, booking_date: "2023-01-01" },
  { booking_id: 5, event_name: "Concert", event_date: "2026-11-05", payment_status: "Paid", number_of_tickets: 4, booking_date: "2026-01-03" }
]);

db.bookings.find({ event_date: { $gt: "2026-10-01" }, payment_status: "Paid" });

db.bookings.updateMany({ event_date: { $lt: "2026-01-01" }, payment_status: "Paid" }, { $set: { payment_status: "Refunded" } });

db.bookings.deleteMany({ payment_status: "Pending", booking_date: { $lt: "2024-01-01" } });

db.bookings.aggregate([
  { $group: { _id: "$event_name", total_tickets: { $sum: "$number_of_tickets" } } }
]);
