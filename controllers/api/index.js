const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');

// all the userRoutes use /api/user/
router.use('/user', userRoutes);

// all the reviewRoutes use /api/review/
router.use('/review', reviewRoutes);

module.exports = router;