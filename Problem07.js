db.parking.insertMany([
  { slot_id: 1, floor: 1, vehicle_type: "Car", is_occupied: false, vehicle_number: "" },
  { slot_id: 2, floor: 1, vehicle_type: "Bike", is_occupied: true, vehicle_number: "KA01" },
  { slot_id: 3, floor: 2, vehicle_type: "Car", is_occupied: false, vehicle_number: "" },
  { slot_id: 4, floor: 2, vehicle_type: "Bike", is_occupied: false, vehicle_number: "" },
  { slot_id: 5, floor: 3, vehicle_type: "Car", is_occupied: true, vehicle_number: "KA02" }
]);

db.parking.find({ is_occupied: false });
db.parking.find({}, { slot_id: 1, floor: 1, vehicle_type: 1, _id: 0 });
db.parking.deleteOne({ slot_id: 5 });

