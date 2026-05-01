db.playlists.insertOne({
  playlist_id: 1,
  user_name: "Asha",
  playlist_name: "Hits",
  songs: [{ title: "Song1", artist: "Artist1" }],
  created_date: "2026-01-01",
  total_duration_minutes: 60,
  is_public: true,
  play_count: 120
});

db.playlists.insertMany([
  { playlist_id: 2, user_name: "Rahul", playlist_name: "Mix", songs: [{ title: "Song2", artist: "Artist2" }], created_date: "2026-01-02", total_duration_minutes: 40, is_public: false, play_count: 50 },
  { playlist_id: 3, user_name: "Neha", playlist_name: "Chill", songs: [{ title: "Song3", artist: "Artist3" }], created_date: "2026-01-03", total_duration_minutes: 70, is_public: true, play_count: 200 },
  { playlist_id: 4, user_name: "Kiran", playlist_name: "Old", songs: [{ title: "Song4", artist: "Artist4" }], created_date: "2022-01-01", total_duration_minutes: 30, is_public: false, play_count: 20 },
  { playlist_id: 5, user_name: "Priya", playlist_name: "Party", songs: [{ title: "Song5", artist: "Artist5" }], created_date: "2026-01-04", total_duration_minutes: 90, is_public: true, play_count: 300 },
  { playlist_id: 6, user_name: "Arjun", playlist_name: "Focus", songs: [{ title: "Song6", artist: "Artist6" }], created_date: "2026-01-05", total_duration_minutes: 50, is_public: true, play_count: 80 }
]);

db.playlists.find({ is_public: true, play_count: { $gt: 100 } });

db.playlists.updateOne({ playlist_id: 1 }, { $inc: { play_count: 1 } });

db.playlists.deleteMany({ created_date: { $lt: "2023-01-01" }, is_public: false });

db.playlists.aggregate([
  { $group: { _id: "$user_name", avg_duration: { $avg: "$total_duration_minutes" } } }
]);

