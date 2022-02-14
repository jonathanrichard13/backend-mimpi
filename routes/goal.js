const router = require('express').Router();
let Goal = require('../models/goal.model');

// get all
router.route('/').get((req, res) => {
  Goal.find()
    .then(Goal => res.json(Goal))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get Goal from targetId
router.route('/targetId/:targetId').get((req, res) => {
  Goal.find({"targetId" : req.params.targetId})
   .then(goal => res.json(goal))
   .catch(err => res.status(400).json('Error: ' + err));
})

// get Goal from goalId
router.route('/:goalId').get((req, res) => {
    Goal.find({"_id" : req.params.goalId})
     .then(goal => res.json(goal))
     .catch(err => res.status(400).json('Error: ' + err));
})

// Edit Goal
router.route('/editFinishStatus/:goalId').put((req, res) => {
    Goal.findOneAndUpdate({
      _id: req.params.goalId
    }, 
    {
      isFinished: req.body.isFinished,
    })
      .then(goal => res.json(goal))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editComment/:goalId').put((req, res) => {
  Goal.findOneAndUpdate({
    _id: req.params.goalId
  }, 
  {
    comment : req.body.comment,
    rate : req.body.rate
  })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editKontakDeadline/:goalId').put((req, res) => {
  Goal.findOneAndUpdate({
    _id: req.params.goalId
  }, 
  {
    pic : req.body.pic,
    deadline : req.body.deadline
  })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error: ' + err));
})

// post (save) new Goal
router.route('/add').post((req, res) => {

  // async function addGoal(){
  //   let id = Goal.find()
  //     .then(Goal => Goal.length)
  //     .catch(err => res.status(400).json('Error: ' + err));

    const targetId = req.body.targetId;
    // const goalId = await id + 1;
    const goalName = req.body.goalName;
    const comment = req.body.comment;
    const rate = req.body.rate;
    const deadline = req.body.deadline;
    const isFinished = req.body.isFinished;
      
    const newGoal = new Goal({targetId, goalName, comment, rate, deadline, isFinished});

    newGoal.save()
      .then(() => res.json(newGoal))
      .catch(err => res.status(400).json('Error: ' + err));
  // }

  // addGoal();
});

router.route('/delete/:goalId').delete((req, res) => {
  Goal.findOneAndDelete({goalId: req.params.goalId })
    .then(() => res.json('Goal deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteTarget/:targetId').delete((req, res) => {
  Goal.deleteMany({targetId: req.params.targetId})
    .then(() => res.json("Goals from target deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;