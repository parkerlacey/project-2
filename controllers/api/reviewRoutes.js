const router = require('express').Router();
const User = require('../../models/User');
const Review = require('../../models/Review');
const withAuth = require('../../utils/auth');

// Testing - Get all reviews
router.get('/', withAuth, async (req, res) => {

  try {
    const reviews = await Review.findAll();

    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

// Create a review
router.post('/', withAuth, async (req, res)  => {

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
    res.status(500).json(err);
  }
});

// VIEW a specific review based on the review id
// router.get('/:id', async (req, res)=> {
//   try {
//     // Find review by the id
//     const reviewData = await Review.findByPk(req.params.id);

//     // If there are no reviews from the user
//     if (!reviewData){
//       res.status(404).json({ message: 'There are no reviews with this id!'});
//       return;
//     }
//     // Serialize the data so the template can render it
//     const review = reviewData.get({ plain: true});

//     // Render the data in the review handlebar
//     res.render('review', {
//       review, 
//       logged_in: true
//     });

//     res.status(200);
//   } catch (err){
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// Update a review
// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const reviewData = await Review.update( req.body, {
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!reviewData){
//       res.status(404).json({ message: 'There is no review with this id!'});
//     }

//     res.status(200).json(reviewData);
//   } catch (err){
//     console.error(err);
//     res.status(400).json(err);
//   }
// })

// Delete a review
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const reviewData = await Review.destroy({
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//       },
//     });

//     if (!reviewData) {
//       res.status(404).json({ message: 'There is no review with this id!'});
//       return;
//     }
//   } catch (err){
//     console.error(err);
//     res.status(400).json(err);
//   }
// });

module.exports = router;