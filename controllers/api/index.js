//NEED TO ADJUST CODE TO FIT OUR APP

const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
