const router = require('express').Router();
const withAuth = require('../utils/auth');
const Review  = require('../models/Review');
const User = require('../models/User');

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

// Display the write review page
router.get('/write', (req, res) => {
  try {
    res.render('write-review');
  }catch (err){
    console.error(err);
    res.status(500);
  }
});

// Display the review page by id of review
router.get('/review/:id', async (req, res)=> {
  try {
    // Find review by the id
    const reviewData = await Review.findByPk(req.params.id);

    // If there are no reviews to match id
    if (!reviewData){
      res.status(404).json({ message: 'There are no reviews with this id!'});
      return;
    }
    // Serialize the data so the template can render it
    const review = reviewData.get({ plain: true});

    // Render the data in the review handlebar
    res.render('review', {
      ...review, 
      logged_in: true
    });

    res.status(200);
  } catch (err){
    console.error(err);
    res.status(500).json(err);
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