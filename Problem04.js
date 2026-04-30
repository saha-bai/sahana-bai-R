db.expenses.insertOne({
  expense_id: 1,
  category: "Food",
  amount: 300,
  date: "2026-04-01",
  payment_method: "UPI",
  note: "Lunch"
});

db.expenses.insertMany([
  { expense_id: 2, category: "Transport", amount: 600, date: "2026-04-02", payment_method: "Cash", note: "" },
  { expense_id: 3, category: "Bills", amount: 1200, date: "2026-04-03", payment_method: "Card", note: "" },
  { expense_id: 4, category: "Food", amount: 200, date: "2026-04-04", payment_method: "UPI", note: "" },
  { expense_id: 5, category: "Entertainment", amount: 800, date: "2026-04-05", payment_method: "UPI", note: "" },
  { expense_id: 6, category: "Food", amount: 1000, date: "2026-04-06", payment_method: "Cash", note: "" }
]);

db.expenses.find({ amount: { $gt: 500 } });
db.expenses.find({}, { category: 1, amount: 1, date: 1, _id: 0 });
db.expenses.deleteOne({ expense_id: 6 });
