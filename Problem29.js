db.followers.insertMany([
  { follower_id: 1, follower_name: "Asha", engagement_score: 90, is_active: true, followed_since: "2026-01-01", interests: ["Tech","Music"], last_interaction_date: "2026-01-01" },
  { follower_id: 2, follower_name: "Rahul", engagement_score: 50, is_active: true, followed_since: "2023-01-01", interests: ["Food"], last_interaction_date: "2023-01-01" },
  { follower_id: 3, follower_name: "Neha", engagement_score: 10, is_active: true, followed_since: "2021-01-01", interests: ["Travel"], last_interaction_date: "2023-01-01" },
  { follower_id: 4, follower_name: "Kiran", engagement_score: 85, is_active: true, followed_since: "2026-01-02", interests: ["Tech"], last_interaction_date: "2026-01-02" },
  { follower_id: 5, follower_name: "Priya", engagement_score: 95, is_active: true, followed_since: "2026-01-03", interests: ["Music"], last_interaction_date: "2026-01-03" }
]);

db.followers.find({ engagement_score: { $gt: 80 }, is_active: true });

db.followers.updateMany({ last_interaction_date: { $lt: "2025-01-01" } }, { $set: { is_active: false } });

db.followers.deleteMany({ followed_since: { $lt: "2022-01-01" }, engagement_score: { $lt: 20 } });

db.followers.aggregate([
  { $unwind: "$interests" },
  { $group: { _id: "$interests", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);
