db.workouts.insertMany([
  { workout_id: 1, exercise_name: "Running", duration_minutes: 30, calories_burned: 200, date: "2026-01-01", intensity: "High" },
  { workout_id: 2, exercise_name: "Cycling", duration_minutes: 45, calories_burned: 300, date: "2026-01-02", intensity: "Medium" },
  { workout_id: 3, exercise_name: "Yoga", duration_minutes: 60, calories_burned: 150, date: "2026-01-03", intensity: "Low" },
  { workout_id: 4, exercise_name: "HIIT", duration_minutes: 20, calories_burned: 250, date: "2026-01-04", intensity: "High" },
  { workout_id: 5, exercise_name: "Gym", duration_minutes: 50, calories_burned: 350, date: "2026-01-05", intensity: "High" }
]);

db.workouts.find({ intensity: "High" });
db.workouts.find({}, { exercise_name: 1, duration_minutes: 1, calories_burned: 1, _id: 0 });
db.workouts.deleteOne({ workout_id: 5 });
