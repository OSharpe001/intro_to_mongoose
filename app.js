require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5008;

// SET UP MONGOOSE
const mongoose = require("mongoose");
const Tweet = require("./tweet.js");

// MONGOOSE CONNECTION
const MONGO_URI = process.env.MONGO_URI;
const db = mongoose.connection;

// CONNECT TO MONGODB
mongoose.connect(MONGO_URI, {
    // GET RID OF ERRORS IN THE CONSOLE
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// ERROR SUCCESS MESSAGES ABOUT CONNECTION
// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));

db.on("close", () => console.log("mongo disconnected"));

const myFirstTweet = {
    title: "Deep Thought",
    body: "Friends,I am the realest coder, alive",
    author: "Arthur"
};

// Tweet.create(myFirstTweet)
// // IF THE DB TRANSACTION SUCCEEDS
// .then((tweet) => {
//     console.log(tweet)
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     db.close();
// });

const manyTweets = [
    {
      title: "Deep Thoughts",
      body: "Friends, I am the realest coder alive",
      author: "Arthur",
    },
    {
      title: "Sage Advice",
      body: "Friends, I am awesome and you are too",
      author: "Arthur",
      likes: 20,
    },
    {
      title: "Is TI the Jadakiss of the South",
      body: "TI is severely underrated and we need to fix that expeditiously",
      author: "Arthur",
      likes: 40,
    },
    {
      title: "Crypto",
      body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
      author: "Arthur",
      likes: 162,
    },
    {
      title: "Confusion",
      body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
      author: "Arthur",
      likes: -100,
    },
    {
      title: "Vespa",
      body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
      author: "Arthur",
      likes: 2,
    },
    {
      title: "Licensed",
      body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
      author: "Arthur",
      likes: 3,
    },
    {
      title: "Water",
      body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
      author: "Arthur",
    },
  ];

// Tweet.insertMany(manyTweets)
// // IF THE DB TRANSACTION SUCCEEDS
// .then((tweet) => {
//     console.log(tweet)
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     db.close();
// });

// FIND ALL DOCUMENTS
// Tweet.find({})
// .then((tweets) => {
//     console.log(tweets);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     db.close();
// });

// FIND TITLE AND BODY FROM ALL DOCUMENTS
// Tweet.find({}, "title body")
// .then((tweets) => {
//     console.log(tweets);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     db.close();
// });

// FIND DOCUMENT WITH TITLE OF "WATER" FROM ALL DOCUMENTS
// Tweet.find({title: "Water"})
// .then((tweets) => {
//     console.log(tweets);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     db.close();
// });

// FIND DOCUMENT WITH 20+ LIKES FROM ALL DOCUMENTS
// Tweet.find({likes: {$gte: 20}})
// .then((tweets) => {
//     console.log(tweets);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     db.close();
// });

// FIND AN ENTRY IN THE DATABASE BY IT'S TITLE AND DELETE IT
// Tweet.findOneAndRemove({ title: "Deep Thoughts" })
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// });

// UPDATE A PRIOR ENTRY IN MY DATABASE
// Tweet.findOneAndUpdate(
//     { title: "Vespa" },
//     { sponsored: true }, // THE PARAMETER THAT WE ARE UPDATING
//     { new: true }) // HAS TO BE THE THIRD ARGUMENT WHEN UPDATING AN ENTRY
//   // if database transaction succeeds
//   .then((tweet) => {
//     console.log(tweet)
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//    db.close()
//   });

// RETURN A COUNT OF THE AMOUNT OF ENTRIES IN DATABASE THAT MEETS THE QUERY
// Tweet.countDocuments({ likes: { $gte: 20 } })
// // if database transaction succeeds
// .then((count) => {
//   console.log(count)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// });

// DO A SEARCH WITH A RETURN LIMIT OF TWO ITEMS FROM THE DATABASE TARGETING ENTRIES WITH "LIKES" OVER 20 (SORTED BY "TITLE")
// Tweet.find({ likes: { $gte: 20 } }, "title -_id")
//   .limit(2)
//   .sort("title")
//   .exec()
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// });

app.listen(PORT, () => {
    console.log(`Today's Express Server was brought to you, today, by the good folks at port ${PORT}! 😅`)
});