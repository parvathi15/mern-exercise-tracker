const router = require("express").Router(); //express router
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  // end point of http requests at the end of "/"
  User.find() //list of all users from mongodb database
    .then(users => res.json(users)) //users in json format
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  //new user saved in database
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
