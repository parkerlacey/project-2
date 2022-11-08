const router = require('express').Router();
const User = require('../../models/User');

//! Sign up ! --> Create a new user 
router.post('/', async(req, res)=> {
try {

  // Create new user in the database
  const userData = await User.create({ 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  // Create new session --> save id and logged in status
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_id = true;
    req.session.name = userData.name;
    res.json(userData);
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

module.exports = router;