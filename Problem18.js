db.equipment.insertMany([
  { equip_id: 1, equip_name: "Treadmill", category: "Cardio", purchase_date: "2014-01-01", condition: "OutOfOrder", last_maintenance_date: "2024-01-01", next_maintenance_date: "2026-01-01" },
  { equip_id: 2, equip_name: "Dumbbell", category: "Strength", purchase_date: "2020-01-01", condition: "Good", last_maintenance_date: "2026-01-01", next_maintenance_date: "2027-01-01" },
  { equip_id: 3, equip_name: "Cycle", category: "Cardio", purchase_date: "2013-01-01", condition: "NeedsService", last_maintenance_date: "2024-01-01", next_maintenance_date: "2025-01-01" },
  { equip_id: 4, equip_name: "Bench", category: "Strength", purchase_date: "2012-01-01", condition: "OutOfOrder", last_maintenance_date: "2023-01-01", next_maintenance_date: "2024-01-01" },
  { equip_id: 5, equip_name: "Rowing", category: "Cardio", purchase_date: "2021-01-01", condition: "Good", last_maintenance_date: "2026-02-01", next_maintenance_date: "2027-02-01" }
]);

db.equipment.find({ condition: { $in: ["NeedsService","OutOfOrder"] } });
db.equipment.updateMany({ last_maintenance_date: { $gt: "2025-01-01" } }, { $set: { condition: "Good" } });
db.equipment.deleteMany({ purchase_date: { $lt: "2015-01-01" }, condition: "OutOfOrder" });
db.equipment.find().sort({ next_maintenance_date: 1 });
