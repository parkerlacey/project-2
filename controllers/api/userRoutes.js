const router = require('express').Router();
const User = require('../../models/User');

// Test to view all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll()

    res.status(200).json(userData);
  }catch(err){
    console.error(err);
    res.status(500);
  }
});

// Sign up! --> Create a new user 
router.post('/signup', async(req, res)=> {
try {

  // Create new user in the database
  const userData = await User.create({ 
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  // Create new session --> save id, logged in status and name
  req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_id = true;
    req.session.username = userData.username;
  });
  
  res.status(200).json(userData);
}catch(err){
  console.error(err);
  res.status(500);
}
});

// Log in! --> Check for user in the database
router.get('/login', async (req, res) => {
  try {
    // Search for user in the database with same email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user with email --> return error message
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Search for password from the valid email put in
    const validPassword = await userData.checkPassword(req.body.password);

    // If not a valid password --> return error message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Save session information
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//!
//TODO: Log out --> Delete user session
router.post('/logout', (req, res) => {

  // If the user is logged in --> then delete their session/ log them out
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;