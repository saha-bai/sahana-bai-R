db.feedback.insertMany([
  { feedback_id: 1, guest_name: "Asha", hotel_name: "HotelA", overall_rating: 2, cleanliness_rating: 2, service_rating: 2, would_recommend: false, feedback_date: "2026-01-01" },
  { feedback_id: 2, guest_name: "Rahul", hotel_name: "HotelA", overall_rating: 5, cleanliness_rating: 5, service_rating: 5, would_recommend: true, feedback_date: "2026-01-02" },
  { feedback_id: 3, guest_name: "Neha", hotel_name: "HotelB", overall_rating: 4, cleanliness_rating: 4, service_rating: 4, would_recommend: true, feedback_date: "2026-01-03" },
  { feedback_id: 4, guest_name: "Kiran", hotel_name: "HotelB", overall_rating: 1, cleanliness_rating: 1, service_rating: 1, would_recommend: false, feedback_date: "2023-01-01" },
  { feedback_id: 5, guest_name: "Priya", hotel_name: "HotelA", overall_rating: 5, cleanliness_rating: 5, service_rating: 5, would_recommend: true, feedback_date: "2026-01-04" }
]);

db.feedback.find({ overall_rating: { $lt: 3 }, would_recommend: false });

db.feedback.updateMany({ overall_rating: { $gt: 4 } }, { $set: { would_recommend: true } });

db.feedback.deleteMany({ feedback_date: { $lt: "2023-01-01" }, overall_rating: 1 });

db.feedback.aggregate([
  { $group: { _id: "$hotel_name", avg_cleanliness: { $avg: "$cleanliness_rating" }, avg_service: { $avg: "$service_rating" } } }
]);
