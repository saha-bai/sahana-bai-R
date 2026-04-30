db.hostel.insertMany([
  { student_id: 1, name: "Asha", room_number: 101, block_name: "A", bed_number: 1, check_in_date: "2026-01-01" },
  { student_id: 2, name: "Rahul", room_number: 102, block_name: "A", bed_number: 2, check_in_date: "2026-01-02" },
  { student_id: 3, name: "Priya", room_number: 103, block_name: "B", bed_number: 1, check_in_date: "2026-01-03" },
  { student_id: 4, name: "Kiran", room_number: 104, block_name: "A", bed_number: 2, check_in_date: "2026-01-04" },
  { student_id: 5, name: "Neha", room_number: 105, block_name: "C", bed_number: 1, check_in_date: "2026-01-05" }
]);

db.hostel.find({ block_name: "A" });
db.hostel.find({}, { name: 1, room_number: 1, block_name: 1, _id: 0 });
db.hostel.deleteOne({ student_id: 5 });
