const router = require('express').Router();
const res = require('express/lib/response');
const Review = require('../../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const review = await Review.findAll();

    res.status(200).json(review);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

// TODO: Get all reviews from specific user 
router.get('/:id', async (req, res)=> {
  try {
    // Find review by the id
    const reviewData = await Review.findByPk(req.params.id, {
      // Include the user model's name data
      include: [
        {
          model: User,
          attribute: ['name'],
        },
      ],
    });

    // Serialize the data so the template can render it
    const review = reviewData.get({ plain: true });

    // Render the data in the review handlebar
    res.render('review', {
      ...review, 
      logged_in: req.session.logged_in
    });

    res.status(200).json(review)
  } catch (err){
    console.error(err);
    res.status(500).json(err);
  }
});

// TODO: Create a review
router.post('/', async (req, res)  => {
  try {
    const review = await Review.create({
      title: req.body.title,
      content: req.body.content,
      rating: req.body.rating,
      date_created: req.session.date_created,
      user_id: req.session.user_id
    });

    res.status(200).json(review);
  } catch (err){
    console.error(err);
    res.status(400).json(err);
  }
});

// TODO: Update a review

// TODO: Delete a review

module.exports = router;