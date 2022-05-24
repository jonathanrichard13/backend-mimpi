const router = require('express').Router();
let Keyword = require('../models/keyword.model');

// get all
router.route('/').get((req, res) => {
  Keyword.find()
    .then(keywords => res.json(keywords))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get specific keyword
router.route('/:keyword').get((req, res) => {
  Keyword.find({'keyword' : req.params.keyword})
   .then(keyword => res.json(keyword))
   .catch(err => res.status(400).json('Error: ' + err))
})

// post (save) new keyword
router.route('/add').post((req, res) => {
    const keyword = req.body.keyword;
    const suggestion1 = req.body.suggestion1;
    const suggestion2 = req.body.suggestion2;
    const suggestion3 = req.body.suggestion3;
  
    const newKeyword = new Keyword({keyword, suggestion1, suggestion2, suggestion3});
  
    newKeyword.save()
      .then(() => res.json(newKeyword))
      .catch(err => res.status(400).json('Error: ' + err));
});


// Edit Keyword, 1 at a time
router.route('/update/:keyword').put((req, res) => {

    if (req.body.suggestion1 != null){
        Keyword.findOneAndUpdate({
          keyword: req.params.keyword
        }, 
        {
            suggestion1 : req.body.suggestion1,
        })
          .then(keyword => res.json(keyword))
          .catch(err => res.status(400).json('Error: ' + err));
    } else if (req.body.suggestion2 != null){
        Keyword.findOneAndUpdate({
          keyword: req.params.keyword
        }, 
        {
            suggestion2 : req.body.suggestion2,
        })
          .then(keyword => res.json(keyword))
          .catch(err => res.status(400).json('Error: ' + err));
    } else if (req.body.suggestion3 != null){
        Keyword.findOneAndUpdate({
          keyword: req.params.keyword
        }, 
        {
            suggestion3 : req.body.suggestion3,
        })
          .then(keyword => res.json(keyword))
          .catch(err => res.status(400).json('Error: ' + err));
    }

  })

module.exports = router;