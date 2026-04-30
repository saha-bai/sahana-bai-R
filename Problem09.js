db.parcels.insertOne({
  parcel_id: 1,
  sender_name: "Asha",
  receiver_name: "Neha",
  weight: 2,
  shipping_cost: 200,
  booking_date: "2026-01-01",
  delivery_status: "Pending"
});

db.parcels.insertMany([
  { parcel_id: 2, sender_name: "Rahul", receiver_name: "Priya", weight: 3, shipping_cost: 300, booking_date: "2026-01-02", delivery_status: "Shipped" },
  { parcel_id: 3, sender_name: "Kiran", receiver_name: "Amit", weight: 1, shipping_cost: 150, booking_date: "2026-01-03", delivery_status: "Pending" },
  { parcel_id: 4, sender_name: "Meera", receiver_name: "Dev", weight: 4, shipping_cost: 400, booking_date: "2026-01-04", delivery_status: "Delivered" },
  { parcel_id: 5, sender_name: "Arjun", receiver_name: "Ravi", weight: 2, shipping_cost: 250, booking_date: "2026-01-05", delivery_status: "Pending" },
  { parcel_id: 6, sender_name: "Sita", receiver_name: "Anil", weight: 5, shipping_cost: 500, booking_date: "2026-01-06", delivery_status: "Shipped" }
]);

db.parcels.find({ delivery_status: "Pending" });
db.parcels.find({}, { sender_name: 1, receiver_name: 1, shipping_cost: 1, _id: 0 });
db.parcels.deleteOne({ parcel_id: 6 });

