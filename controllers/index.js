const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const growerRoutes = require('./growerRoutes');

router.use('/', homeRoutes);
router.use('/growerProfile', growerRoutes);
router.use('/api', apiRoutes);

module.exports = router;
