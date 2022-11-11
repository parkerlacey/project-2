const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');

// all the userRoutes use /api/user/
router.use('/user', userRoutes);

// all the reviewRoutes use /api/review/
router.use('/review', reviewRoutes);

module.exports = router;

// jess' api mess
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '816d4e55c7msh389ac0e5a23c49bp177b17jsnae3edaad5b8e',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=eiffel%20tower&lang=en_US&units=km', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));