db.reviews.insertOne({
  review_id: 1,
  course_name: "MongoDB Basics",
  student_name: "Asha",
  rating: 5,
  review_text: "Excellent",
  review_date: "2026-01-01",
  likes_count: 15,
  is_verified_purchase: false
});

db.reviews.insertMany([
  { review_id: 2, course_name: "Python", student_name: "Rahul", rating: 4, review_text: "Good", review_date: "2026-01-02", likes_count: 5, is_verified_purchase: false },
  { review_id: 3, course_name: "MongoDB Advanced", student_name: "Neha", rating: 5, review_text: "Great", review_date: "2026-01-03", likes_count: 20, is_verified_purchase: false },
  { review_id: 4, course_name: "Java", student_name: "Kiran", rating: 2, review_text: "Average", review_date: "2023-01-01", likes_count: 1, is_verified_purchase: false },
  { review_id: 5, course_name: "C++", student_name: "Priya", rating: 1, review_text: "Poor", review_date: "2023-01-02", likes_count: 0, is_verified_purchase: false },
  { review_id: 6, course_name: "MongoDB Mastery", student_name: "Arjun", rating: 5, review_text: "Best", review_date: "2026-01-04", likes_count: 25, is_verified_purchase: false }
]);

db.reviews.find({ rating: { $gt: 4 }, likes_count: { $gt: 10 } });
db.reviews.updateMany({ course_name: /MongoDB/ }, { $set: { is_verified_purchase: true } });
db.reviews.deleteMany({ review_date: { $lt: "2024-01-01" }, rating: 1 });
db.reviews.find({}, { course_name: 1, student_name: 1, rating: 1, _id: 0 }).sort({ rating: -1 });

