const router = require('express').Router();
const withAuth = require('../utils/auth');

// Display the welcome page
router.get('/welcome', (req, res) => {
  try {
    res.render('welcome');
  } catch (err){
    console.error(err);
    res.status(500);
  }
});

// Display the login page
router.get('/login', (req, res) => {
  try {
    res.render('login');
  }catch (err){
    console.error(err);
    res.status(500);
  }
});

//! 500 error
// Display the home page
router.get('/home', withAuth, (req, res) => {
  try {
    res.render('home');
    res.status(200);
  } catch (err){
    console.error(err);
    res.status(500);
  }
});

module.exports = router;