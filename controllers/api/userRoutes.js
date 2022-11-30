//NEED TO ADJUST CODE TO FIT OUR APP

const router = require('express').Router();
const { User } = require('../../models');


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
