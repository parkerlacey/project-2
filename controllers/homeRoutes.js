const router = require('express').Router();
const withAuth = require('../utils/auth');
//const getrestaurant = require('../utils/restaurant');

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
router.get('/home', (req, res) => {
  try {
    //let response = getrestaurant();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '816d4e55c7msh389ac0e5a23c49bp177b17jsnae3edaad5b8e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    
     fetch('https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=20&open_now=false&lang=en_US', options)
       .then(response => response.json())
       .then(response => {
      var listofrestaurants = response.data;
      return listofrestaurants;
    })
    .then((response) => {
      let restaurantarray = [];
      response.map((restaurant) => restaurantarray.push(restaurant))
      console.log(restaurantarray)
      res.render('home', restaurantarray);
      res.status(200);})
  
  } catch (err){
    console.error(err);
    res.status(500);
  }
});

module.exports = router;