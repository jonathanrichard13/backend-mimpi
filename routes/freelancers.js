const router = require('express').Router();
let Freelancer = require('../models/freelancer.model');

// get all
router.route('/').get((req, res) => {
  Freelancer.find()
    .then(Freelancers => res.json(Freelancers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get by id
router.route('/:id').get((req, res) => {
  Freelancer.findById(req.params.id)
    .then(Freelancer => res.json(Freelancer))
    .catch(err => res.status(400).json('Error: ' + err))
});

// post (save) new Freelancer
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const keterampilan = req.body.keterampilan;
  const level = req.body.level;
  const headline = req.body.headline;
  const deskripsi = req.body.deskripsi;
  const namaStandard = req.body.namaStandard;
  const deskripsiStandard = req.body.deskripsiStandard;
  const revisiStandard = req.body.revisiStandard;
  const hargaStandard = req.body.hargaStandard;
  const namaPremium = req.body.namaPremium;
  const deskripsiPremium = req.body.deskripsiPremium;
  const revisiPremium = req.body.revisiPremium;
  const hargaPremium = req.body.hargaPremium;
    

  const newFreelancer = new Freelancer({username, keterampilan, level, headline, deskripsi, namaStandard, deskripsiStandard, revisiStandard, hargaStandard, namaPremium, deskripsiPremium, revisiPremium, hargaPremium});

  newFreelancer.save()
    .then(() => res.json('Freelancer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// put (edit) existing Freelancer
router.route('/update/:id').post((req, res) => {
  Freelancer.findById(req.params.id)
    .then(Freelancer => {
      Freelancer.username = req.body.username;
      Freelancer.keterampilan = req.body.keterampilan;
      Freelancer.headline = req.body.headline;
      Freelancer.deskripsi = req.body.deskripsi;
      Freelancer.namaStandard = req.body.namaStandard;
      Freelancer.deskripsiStandard = req.body.deskripsiStandard;
      Freelancer.revisiStandard = req.body.revisiStandard;
      Freelancer.hargaStandard = req.body.hargaStandard;
      Freelancer.namaPremium = req.body.namaPremium;
      Freelancer.deskripsiPremium = req.body.deskripsiPremium;
      Freelancer.revisiPremium = req.body.revisiPremium;
      Freelancer.hargaPremium = req.body.hargaPremium;

      Freelancer.save()
        .then(() => res.json('Freelancer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Freelancer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;