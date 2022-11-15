// Login 
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (email && password) {
    console.log('test 1')
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('test 2')
      // If successful, redirect the browser to the home page
      document.location.replace('/');
    } else {
      alert(response.statusText);
      console.log('test 3')
    }
  }
};

// Sign up!
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Get values from the signup form
  const username = document.getElementById('username-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  // If theres a name, email and password value then send values to POST signup route
  if (username && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If successful, redirect the browser to the home page
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById('register-btn')
  .addEventListener('click', loginFormHandler);

document
  .getElementById('login-btn')
  .addEventListener('click', signupFormHandler);