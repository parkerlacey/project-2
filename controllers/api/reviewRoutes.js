const router = require('express').Router();
const res = require('express/lib/response');
const Review = require('../../models/User');

// TODO: Get all reviews
router.get('/', async (req, res) => {
  try {
    const review = await Review.findAll();

    res.status(200).json(review);
  } catch (err) {
    console.error(err);
    res.status(500)
  }
});

// TODO: Get all reviews from specific user

// TODO: Create a review

// TODO: Update a review

// TODO: Delete a review