db.polls.insertMany([
  { poll_id: 1, question: "Fav Color?", options: ["Red","Blue"], votes: [10,20], is_active: true, end_date: "2026-12-01" },
  { poll_id: 2, question: "Fav Food?", options: ["Pizza","Burger","Pasta","Rice"], votes: [5,15,10,20], is_active: true, end_date: "2026-11-01" },
  { poll_id: 3, question: "Fav Sport?", options: ["Cricket","Football"], votes: [30,25], is_active: false, end_date: "2023-01-01" }
]);

db.polls.find({ is_active: true });
db.polls.updateMany({ end_date: { $lt: "2026-01-01" } }, { $set: { is_active: false } });
db.polls.deleteMany({ created_date: { $lt: "2023-01-01" }, is_active: false });
db.polls.find({ options: { $size: 4 } });
