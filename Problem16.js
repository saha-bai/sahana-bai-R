db.prescriptions.insertMany([
  { prescription_id: 1, patient_name: "Asha", doctor_name: "Dr.Raj", medicine_name: "Med1", issue_date: "2026-01-01", expiry_date: "2026-12-01", status: "Active" },
  { prescription_id: 2, patient_name: "Rahul", doctor_name: "Dr.Kiran", medicine_name: "Med2", issue_date: "2023-01-01", expiry_date: "2023-12-01", status: "Fulfilled" },
  { prescription_id: 3, patient_name: "Neha", doctor_name: "Dr.Raj", medicine_name: "Med3", issue_date: "2025-01-01", expiry_date: "2025-12-01", status: "Active" },
  { prescription_id: 4, patient_name: "Kiran", doctor_name: "Dr.Sita", medicine_name: "Med4", issue_date: "2022-01-01", expiry_date: "2022-12-01", status: "Expired" },
  { prescription_id: 5, patient_name: "Priya", doctor_name: "Dr.Amit", medicine_name: "Med5", issue_date: "2026-01-01", expiry_date: "2026-11-01", status: "Active" }
]);

db.prescriptions.find({ status: "Active" });
db.prescriptions.updateMany({ expiry_date: { $lt: "2026-01-01" } }, { $set: { status: "Expired" } });
db.prescriptions.deleteMany({ status: "Fulfilled", issue_date: { $lt: "2024-01-01" } });
db.prescriptions.find({}, { patient_name: 1, medicine_name: 1, status: 1, _id: 0 }).sort({ issue_date: -1 });
