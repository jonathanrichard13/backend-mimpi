const router = require('express').Router();
let Metric = require('../models/metric.model');

// get all
router.route('/').get((req, res) => {
  Metric.find()
    .then(Metric => res.json(Metric))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get Metric from metricId
router.route('/:metricId').get((req, res) => {
  Metric.find({"_id" : req.params.metricId})
   .then(Metric => res.json(Metric))
   .catch(err => res.status(400).json('Error: ' + err));
})

// get Metric from goalId
router.route('/goalId/:goalId').get((req, res) => {
    Metric.find({"goalId" : req.params.goalId})
     .then(Metric => res.json(Metric))
     .catch(err => res.status(400).json('Error: ' + err));
})

// post (save) new Metric
router.route('/add').post((req, res) => {

  // async function addMetric(){
  //   let id = Metric.find()
  //     .then(Metric => Metric.length)
  //     .catch(err => res.status(400).json('Error: ' + err));

    const targetId = req.body.targetId;
    const goalId = req.body.goalId;
    // const metricId = await id + 1;
    const metricName = req.body.metricName;
    const isFinished = req.body.isFinished;
    const deadline = req.body.deadline;
    const comment = req.body.comment;
    const pic = req.body.pic;
    const rate = req.body.rate;
      
    const newMetric = new Metric({targetId, goalId, metricName, isFinished, deadline, comment, pic, rate});

    newMetric.save()
    .then(() => res.json(newMetric))
    .catch(err => res.status(400).json('Error: ' + err));
  // }

  // addMetric();

});

// Edit Metrics
router.route('/editFinishStatus/:metricId').put((req, res) => {
  Metric.findOneAndUpdate({
    _id: req.params.metricId
  }, 
  {
    isFinished: req.body.isFinished,
  })
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editComment/:metricId').put((req, res) => {
Metric.findOneAndUpdate({
  _id: req.params.metricId
}, 
{
  comment : req.body.comment,
  rate : req.body.rate
})
  .then(metric => res.json(metric))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/editKontakDeadline/:metricId').put((req, res) => {
  Metric.findOneAndUpdate({
  _id: req.params.metricId
}, 
{
  pic : req.body.pic,
  deadline : req.body.deadline
})
  .then(metric => res.json(metric))
  .catch(err => res.status(400).json('Error: ' + err));
})

// Delete Metrics
router.route('/delete/:metricId').delete((req, res) => {
  Metric.findOneAndDelete({targetId: req.params.metricId })
    .then(() => res.json('Metric deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteTarget/:targetId').delete((req, res) => {
  Metric.deleteMany({targetId: req.params.targetId})
    .then(() => res.json("Metrics from goal from target deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/deleteGoal/:goalId').delete((req, res) => {
  Metric.deleteMany({goalId: req.params.goalId})
    .then(() => res.json("Metrics from goal deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;