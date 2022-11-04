const router = require('express').Router();

// Testing server routes with get request
router.get('/', async (req, res) => {
  try {
    res.send('Testing to see if we can hit this route.');
    res.status(200);
  } catch (err){
    console.error(err);
    res.status(500);
  }
});

module.exports = router;