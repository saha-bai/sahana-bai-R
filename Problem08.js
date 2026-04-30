db.giftcards.insertOne({
  card_id: 1,
  recipient_name: "Asha",
  sender_name: "Rahul",
  amount: 1000,
  purchase_date: "2026-01-01",
  expiry_date: "2026-12-31",
  is_used: false
});

db.giftcards.insertMany([
  { card_id: 2, recipient_name: "Neha", sender_name: "Kiran", amount: 500, purchase_date: "2026-02-01", expiry_date: "2026-11-30", is_used: false },
  { card_id: 3, recipient_name: "Priya", sender_name: "Amit", amount: 1500, purchase_date: "2026-03-01", expiry_date: "2026-10-31", is_used: true },
  { card_id: 4, recipient_name: "Arjun", sender_name: "Ravi", amount: 2000, purchase_date: "2026-04-01", expiry_date: "2026-09-30", is_used: false },
  { card_id: 5, recipient_name: "Meera", sender_name: "Sita", amount: 750, purchase_date: "2026-05-01", expiry_date: "2026-08-31", is_used: false },
  { card_id: 6, recipient_name: "Dev", sender_name: "Anil", amount: 1200, purchase_date: "2026-06-01", expiry_date: "2026-07-31", is_used: false }
]);

db.giftcards.find({ is_used: false });
db.giftcards.find({}, { recipient_name: 1, amount: 1, expiry_date: 1, _id: 0 });
db.giftcards.deleteOne({ card_id: 6 });
