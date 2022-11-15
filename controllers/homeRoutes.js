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
    const reviewData = await Review.findAll();

    const reviews = reviewData.map((reviews) => reviews.get({ plain: true}));

    res.render('home', {
      reviews,
      logged_in: req.session.logged_in
    });

    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

// Login redirects
// If the users is already logged in -> redirect to home page
// If the users is not logged -> display login page
router.get('/login', (req, res) => {
  if (req.session.logged_in){
    res.redirect('/home');
    return;
  }

  res.render('login')
})

module.exports = router;