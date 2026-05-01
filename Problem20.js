db.beds.insertOne({
  bed_id: 1,
  ward_name: "ICU",
  bed_type: "ICU",
  is_occupied: false,
  patient_name: null,
  admission_date: "2026-05-01",
  expected_discharge_date: "2026-05-10"
});

db.beds.insertMany([
  { bed_id: 2, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: "2026-05-01", expected_discharge_date: "2026-05-12" },
  { bed_id: 3, ward_name: "General", bed_type: "General", is_occupied: true, patient_name: "Rahul", admission_date: "2026-04-25", expected_discharge_date: "2026-05-02" },
  { bed_id: 4, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: "2026-05-01", expected_discharge_date: "2026-05-08" },
  { bed_id: 5, ward_name: "Private", bed_type: "Private", is_occupied: true, patient_name: "Neha", admission_date: "2026-04-28", expected_discharge_date: "2026-05-03" },
  { bed_id: 6, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: "2026-05-01", expected_discharge_date: "2026-05-15" }
]);

db.beds.find({ is_occupied: false, ward_name: "ICU" });
db.beds.updateMany({ admission_date: "2026-05-01" }, { $set: { is_occupied: true, patient_name: "New Patient" } });
db.beds.deleteMany({ expected_discharge_date: { $lt: "2026-05-01" }, is_occupied: true });
db.beds.find({}, { ward_name: 1, bed_type: 1, is_occupied: 1, _id: 0 }).sort({ bed_type: 1 });

