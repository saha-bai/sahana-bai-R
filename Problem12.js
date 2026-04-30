db.attendance.insertMany([
  { record_id: 1, emp_name: "Asha", department: "IT", date: "2026-01-01", status: "Absent", check_in_time: null },
  { record_id: 2, emp_name: "Rahul", department: "HR", date: "2026-01-02", status: "Present", check_in_time: "09:00" },
  { record_id: 3, emp_name: "Neha", department: "IT", date: "2026-01-03", status: "Absent", check_in_time: null },
  { record_id: 4, emp_name: "Kiran", department: "IT", date: "2026-01-04", status: "Leave", check_in_time: null },
  { record_id: 5, emp_name: "Priya", department: "Finance", date: "2026-01-05", status: "Present", check_in_time: "09:15" }
]);

db.attendance.find({ status: "Absent", department: "IT" });
db.attendance.updateMany({ check_in_time: { $ne: null } }, { $set: { status: "Present" } });
db.attendance.deleteMany({ date: { $lt: "2024-01-01" }, status: "Leave" });
db.attendance.find({ status: "Present" }).sort({ date: 1 });
