db.services.insertMany([
  { service_id: 1, customer_name: "Asha", vehicle_number: "KA01", service_type: "Repair", service_date: "2026-01-01", cost: 800, status: "InProgress" },
  { service_id: 2, customer_name: "Rahul", vehicle_number: "KA02", service_type: "Oil Change", service_date: "2024-01-01", cost: 400, status: "Completed" },
  { service_id: 3, customer_name: "Neha", vehicle_number: "KA03", service_type: "Inspection", service_date: "2026-02-01", cost: 300, status: "Scheduled" },
  { service_id: 4, customer_name: "Kiran", vehicle_number: "KA04", service_type: "Repair", service_date: "2025-01-01", cost: 900, status: "InProgress" },
  { service_id: 5, customer_name: "Priya", vehicle_number: "KA05", service_type: "Oil Change", service_date: "2023-01-01", cost: 200, status: "Completed" }
]);

db.services.find({ status: "InProgress", service_date: { $lt: "2026-08-01" } });
db.services.updateMany({ service_date: { $lt: "2025-01-01" } }, { $set: { status: "Completed" } });
db.services.deleteMany({ status: "Completed", cost: { $lt: 500 } });
db.services.find({}, { customer_name: 1, service_type: 1, cost: 1, _id: 0 }).sort({ cost: -1 });

