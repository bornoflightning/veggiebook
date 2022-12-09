const router = require('express').Router();
const withAuth = require('../utils/auth');
const zipCodeData = require('zipcode-city-distance');
const { User } = require('../models');


router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({ where: { user_name: req.body.user_name } });
    //console.log("🚀 ~ file: userRoutes.js ~ line 22 ~ router.post ~ userData", userData)

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.validatePassword(req.body.password);
    console.log("VALID PASSWORD", validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.is_grower = userData.is_grower;
      //console.log("IM RIGHR HERE", req.session)
      res.json({ user: userData, message: 'You are now logged in!' });

    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get(`/signup`, async (req, res) => {
  try {
    res.render(`signup`)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post(`/signup`, async (req, res) => {
  console.log(req.body);
  console.log('hy');
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
      is_grower: req.body.is_grower,
      location: req.body.location,
      description: req.body.description,
    })
    req.session.save(() => {
      req.session.user_id = userData.id,
        req.session.user_name = userData.user_name,
        req.session.logged_in = true,
        res.status(200).json(userData)
    })
  } catch (error) {
    res.status(500).json(error)
  }
})


router.get(`/search`, async (req, res) => {
  try {
    res.render(`search`)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get(`/search/:zip1/:zip2`, async (req, res) => {
  try {
    res.render(`search`)
  } catch (error) {
    res.status(500).json(error)
  }
})
router.post('/search/:zip1/:zip2', async (req, res) => {
  zip1 = (req.params.zip1);
  zip2 = (req.params.zip2);
  zipcode1 = zip1.substr(1);
  zipcode2 = zip2.substr(1);
  distance = zipCodeData.zipCodeDistance(zipcode1, zipcode2,'M')
  console.log(distance);
  try {
    const userData = await User.findAll({
      attributes: {
        exclude: ['password']
      }
    })
    console.log(userData);
    const growerlist =[];
    console.log(growerlist);
    const growerlist2 = growerlist.get({ plain: true });
    res.render('search', {
      ...growerlist2,
      logged_in: true
    });
    if (!userData) {
      res.status(404).json({ message: 'No grower within radius!' });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  };
});
module.exports = router;
