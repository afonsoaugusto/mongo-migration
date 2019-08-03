module.exports = {
  up(db) {
    return db.collection('albums').createIndex(
      {
        content: "text",
        "users.comments": "text",
        "users.profiles": "text"
      },
      {
        name: "MyTextIndex"
      }
   );
  },

  down(db) {
    return db.collection('albums').dropIndex("MyTextIndex");
  }
};
