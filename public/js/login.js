// Login 
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace('/home');
    } else {
      alert(response.statusText);
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
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);