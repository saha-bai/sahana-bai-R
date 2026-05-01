db.wishlist.insertMany([
  { wishlist_id: 1, customer_name: "Asha", product_name: "Phone", product_category: "Electronics", price: 15000, added_date: "2026-01-01", notify_when_available: true },
  { wishlist_id: 2, customer_name: "Rahul", product_name: "Shoes", product_category: "Fashion", price: 2000, added_date: "2026-01-02", notify_when_available: false },
  { wishlist_id: 3, customer_name: "Neha", product_name: "Laptop", product_category: "Electronics", price: 50000, added_date: "2026-01-03", notify_when_available: true },
  { wishlist_id: 4, customer_name: "Kiran", product_name: "Watch", product_category: "Accessories", price: 1500, added_date: "2023-01-01", notify_when_available: true },
  { wishlist_id: 5, customer_name: "Priya", product_name: "Bag", product_category: "Fashion", price: 1800, added_date: "2026-01-04", notify_when_available: true }
]);

db.wishlist.find({ price: { $lt: 2000 }, notify_when_available: true });
db.wishlist.updateMany({ product_category: "Electronics" }, { $mul: { price: 0.8 } });
db.wishlist.deleteMany({ added_date: { $lt: "2024-01-01" } });
db.wishlist.aggregate([{ $group: { _id: "$customer_name", count: { $sum: 1 } } }]);

