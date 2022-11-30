//NEED TO ADJUST CODE TO FIT OUR APP

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const growerRoutes = require('./growerRoutes');
const searchFeedRoutes = require('./searchFeedRoutes');
router.use('/', homeRoutes);
router.use('/profile', growerRoutes);
router.use('/api', apiRoutes);
// router.use('/searchFeedRoutes', searchFeedRoutes);

module.exports = router;
