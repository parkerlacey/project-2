const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send('Testing testing')
});

module.exports = router;