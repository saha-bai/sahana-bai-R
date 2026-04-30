db.tasks.insertOne({
  task_id: 1,
  title: "Study MongoDB",
  description: "Practice queries",
  due_date: "2026-05-01",
  priority: "High",
  is_completed: false
});

db.tasks.insertMany([
  { task_id: 2, title: "Assignment", description: "DBMS", due_date: "2026-05-02", priority: "Medium", is_completed: false },
  { task_id: 3, title: "Gym", description: "Workout", due_date: "2026-05-03", priority: "Low", is_completed: true },
  { task_id: 4, title: "Project", description: "Build app", due_date: "2026-05-10", priority: "High", is_completed: false },
  { task_id: 5, title: "Read", description: "Book", due_date: "2026-05-06", priority: "Low", is_completed: false },
  { task_id: 6, title: "Code", description: "Practice", due_date: "2026-05-07", priority: "Medium", is_completed: true }
]);

db.tasks.find({ is_completed: false });
db.tasks.find({}, { title: 1, due_date: 1, _id: 0 });
db.tasks.deleteOne({ task_id: 6 });
