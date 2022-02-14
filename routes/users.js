const router = require('express').Router();
let User = require('../models/user.model');

// get all
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get all owner
router.route('/owner').get((req, res) => {
  User.find({'isOwner' : "true"})
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error: ' + err))
})

// get all team member
router.route('/team-member').get((req, res) => {
  User.find({'isOwner' : "false"})
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error: ' + err))
})

// get specific team member
router.route('/team-member/:username').get((req, res) => {
  User.find({'isOwner' : "false", "username" : req.params.username})
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error: ' + err))
})

// get specific unlisted team member
router.route('/team-member/unlisted/:username').get((req, res) => {
  User.find({'isOwner' : "false", "username" : req.params.username, "owner": ""})
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error: ' + err))
})

// get specific username password
router.route('/:username/:password').get((req, res) => {
  User.findOne({"username" : req.params.username, "password": req.params.password})
   .then(user => res.json(user))
   .catch(err => res.status(400).json('Error: ' + err))
})

// get by id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
});

// post (save) new user
router.route('/add').post((req, res) => {
  const namaLengkap = req.body.namaLengkap;
  const phone = req.body.phone;
  const tanggalLahir = Date(req.body.tanggalLahir);
  const gender = req.body.gender;
  const username = req.body.username;
  const password = req.body.password;
  const isOwner = req.body.isOwner;
  const owner = req.body.owner;
  const companyName = req.body.companyName
  const vision = req.body.vision
  const mission = req.body.mission
  const why = req.body.why
  const dream = req.body.dream
  const lifePriority = req.body.lifePriority
  const hobby = req.body.hobby

  const newUser = new User({namaLengkap, phone, tanggalLahir, gender, username, password, isOwner, owner, companyName, vision, mission, why, dream, lifePriority, hobby});

  newUser.save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json('Error: ' + err));
});

// put (edit) existing user
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.namaLengkap = req.body.namaLengkap;
      user.phone = req.body.phone;
      user.tanggalLahir = Date.parse(req.body.tanggalLahir);
      user.gender = req.body.gender;
      user.username = req.body.username;
      user.password = req.body.password;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

// "namaLengkap" : "hee"
// "phone" : "172734"
// "tanggalLahir" : "2021-07-10T14:17:36.000Z"
// "gender" : "wanita"
// "username" : "tesss"
// "password" : "word"
// "isOwner" : "true"
// "roleDetail" : ["asda", "sada"