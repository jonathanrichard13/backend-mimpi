const router = require("express").Router();
let Request = require("../models/requests.model");

router.route("/").get((req, res) => {
  Request.find()
    .then((request) => res.json(request))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all request sent to targetUsername
router.route('/:targetUsername').get((req, res) => {
  Request.find({"targetUsername" : req.params.targetUsername})
   .then(target => res.json(target))
   .catch(err => res.status(400).json('Error: ' + err));
})

// get all request with corresponding username and target
router.route('/:username/:targetUsername').get((req, res) => {
  Request.find({"targetUsername" : req.params.targetUsername, "username" : req.params.username})
   .then(target => res.json(target))
   .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const targetUsername = req.body.targetUsername;

  const newRequest = new Request({ username, targetUsername});

  newRequest
    .save()
    .then(() => res.json("Request Sent"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route('/editStatus/:username/:targetUsername/accept').put((req, res) => {
  Goal.findOneAndUpdate({
    targetUsername : req.params.targetUsername, 
    username : req.params.username
  }, 
  {
    status: "accepted"
  })
    .then(req => res.json(req))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editStatus/:username/:targetUsername/decline').put((req, res) => {
  Request.findOneAndUpdate({
    targetUsername : req.params.targetUsername, 
    username : req.params.username
  }, 
  {
    status: "declined"
  })
    .then(req => res.json(req))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
