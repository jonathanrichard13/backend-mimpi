const router = require('express').Router();
let Target = require('../models/targetSetting.model');

// get all
router.route('/').get((req, res) => {
  Target.find()
    .then(target => res.json(target))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get all target from 1 username
router.route('/:username').get((req, res) => {
    Target.find({"username" : req.params.username})
     .then(target => res.json(target))
     .catch(err => res.status(400).json('Error: ' + err));
})

// post (save) new Target
router.route('/add').post((req, res) => {

  // async function addTarget(){
  //   let id = Target.find()
  //     .then(Target => Target.length)
  //     .catch(err => res.status(400).json('Error: ' + err));

    // const targetId = await id + 1;
    const username = req.body.username;
    const target = req.body.target;
    const isFinished = req.body.isFinished;
    const deadline = req.body.deadline;

    const newTarget = new Target({username, target, isFinished, deadline});

    newTarget.save()
      .then(() => res.json(newTarget))
      .catch(err => res.status(400).json('Error: ' + err));
  // }

  // addTarget();
});

// Edit Target
router.route('/editDeadline/:targetId').put((req, res) => {
  Target.findOneAndUpdate({
    _id: req.params.targetId
  }, 
  {
    deadline : req.body.deadline
  })
    .then(target => res.json(target))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editFinishStatus/:targetId').put((req, res) => {
  Target.findOneAndUpdate({
    _id: req.params.targetId
  }, 
  {
    isFinished : req.body.isFinished
  })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editComment/:targetId').put((req, res) => {
  Target.findOneAndUpdate({
    _id: req.params.targetId
  }, 
  {
    comment: req.body.comment,
    detail: req.body.detail
  })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/delete/:targetId').delete((req, res) => {
  Target.findOneAndDelete({_id: req.params.targetId })
    .then(() => res.json('Target deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;