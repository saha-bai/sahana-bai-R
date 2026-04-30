db.contacts.insertOne({
  contact_id: 1,
  first_name: "Asha",
  last_name: "Rao",
  phone: "9999999999",
  email: "asha@gmail.com",
  city: "Mumbai"
});

db.contacts.insertMany([
  { contact_id: 2, first_name: "Rahul", last_name: "Sharma", phone: "8888888888", email: "r@gmail.com", city: "Mumbai" },
  { contact_id: 3, first_name: "Priya", last_name: "Verma", phone: "7777777777", email: "p@gmail.com", city: "Delhi" },
  { contact_id: 4, first_name: "Kiran", last_name: "Patil", phone: "6666666666", email: "k@gmail.com", city: "Mumbai" },
  { contact_id: 5, first_name: "Neha", last_name: "Singh", phone: "5555555555", email: "n@gmail.com", city: "Pune" },
  { contact_id: 6, first_name: "Arjun", last_name: "Mehta", phone: "4444444444", email: "a@gmail.com", city: "Mumbai" }
]);

db.contacts.find({ city: "Mumbai" });
db.contacts.find({}, { first_name: 1, last_name: 1, phone: 1, _id: 0 });
db.contacts.deleteOne({ contact_id: 6 });



