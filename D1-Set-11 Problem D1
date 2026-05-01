db.defects.insertMany([
  { defect_id: 1, product_name: "Item1", defect_type: "Cosmetic", quantity_affected: 10, detection_date: "2026-01-01", status: "Open" },
  { defect_id: 2, product_name: "Item2", defect_type: "Functional", quantity_affected: 20, detection_date: "2026-01-02", status: "Investigating" },
  { defect_id: 3, product_name: "Item3", defect_type: "Safety", quantity_affected: 5, detection_date: "2022-01-01", status: "Resolved" },
  { defect_id: 4, product_name: "Item4", defect_type: "Functional", quantity_affected: 15, detection_date: "2026-01-03", status: "Open" },
  { defect_id: 5, product_name: "Item5", defect_type: "Cosmetic", quantity_affected: 8, detection_date: "2026-01-04", status: "Open" }
]);

db.defects.find({ severity: "High", status: "Open" });

db.defects.updateMany({}, { $set: { status: "Resolved", resolution_date: "2026-05-01" } });

db.defects.deleteMany({ detection_date: { $lt: "2022-01-01" }, status: "Resolved" });

db.defects.aggregate([
  { $group: { _id: "$defect_type", total_quantity: { $sum: "$quantity_affected" } } },
  { $sort: { total_quantity: -1 } }
]);
