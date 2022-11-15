const router = require('express').Router();
const withAuth = require('../utils/auth');
const Review  = require('../models/Review');

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


// Display the home page
router.get('/', withAuth, async (req, res) => {

  try {
    const reviews = await Review.findAll();

    res.render('home', {
      ...reviews
    });

    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

module.exports = router;