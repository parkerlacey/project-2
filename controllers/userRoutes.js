const router = require('express').Router();
const { User } = require('../models');

//! Sign up ! --> Create a new user 
router.post('/api/user', async(req, res)=> {
try {

  // Create new user in the database
  const userData = await new User.create(req.body);

  // Create new session --> save id and logged in status
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_id = true;
  });
  //!
  
  res.status(200).json(userData);
}catch(err){
  console.error(err);
  res.status(500);
}
});

//TODO: Log in! --> Check for user in the database

//TODO: Log out --> Delete user session