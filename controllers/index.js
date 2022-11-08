const router = require('express').Router();
const { route } = require('express/lib/application');
const res = require('express/lib/response');

// Display the welcome page
router.get('/welcome', async (req, res) => {
  try {

    res.render('welcome');

  } catch (err){
    console.error(err);
    res.status(500);
  }
});

// Display the login page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
    
  }catch (err){
    console.error(err);
    res.status(500);
  }
});

// Display the home page
router.get('/home', async (req, res) => {
  try {
    res.render('home');

    res.status(200);
  } catch (err){
    console.error(err);
    res.status(500);
  }
});

module.exports = router;