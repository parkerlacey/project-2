const router = require('express').Router();
const { route } = require('express/lib/application');
const res = require('express/lib/response');

// Testing server is working with get request
router.get('/', async (req, res) => {
  try {
    res.send('Testing to see if we can hit this route.');
    res.status(200);
  } catch (err){
    console.error(err);
    res.status(500);
  }
});

// Display the welcome page
router.get('/welcome', async (req, res) => {
  try {

    res.render('welcome');

  } catch (err){
    console.error(err);
    res.status(500);
  }
});

// Display the home page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
    
  }catch (err){
    console.error(err);
    res.status(500);
  }
});

module.exports = router;