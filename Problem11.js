db.subscriptions.insertMany([
  { sub_id: 1, user_name: "Asha", plan_type: "Basic", monthly_fee: 199, is_active: true, renewal_date: "2026-01-01" },
  { sub_id: 2, user_name: "Rahul", plan_type: "Premium", monthly_fee: 499, is_active: true, renewal_date: "2026-02-01" },
  { sub_id: 3, user_name: "Neha", plan_type: "Standard", monthly_fee: 299, is_active: false, renewal_date: "2024-01-01" },
  { sub_id: 4, user_name: "Kiran", plan_type: "Premium", monthly_fee: 599, is_active: true, renewal_date: "2026-03-01" },
  { sub_id: 5, user_name: "Priya", plan_type: "Basic", monthly_fee: 199, is_active: true, renewal_date: "2026-04-01" }
]);

db.subscriptions.find({ is_active: true, plan_type: "Premium" });
db.subscriptions.updateMany({ plan_type: "Basic" }, { $inc: { monthly_fee: 100 } });
db.subscriptions.deleteMany({ is_active: false, renewal_date: { $lt: "2025-01-01" } });
db.subscriptions.find({}, { user_name: 1, plan_type: 1, monthly_fee: 1, _id: 0 }).sort({ monthly_fee: -1 });

