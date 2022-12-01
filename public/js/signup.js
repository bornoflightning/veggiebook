const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);
  
    const user_name = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const is_grower = document.querySelector('#isGrower').checked;
    const location = document.querySelector('#location').value.trim();
    const description = document.querySelector('#userDesc').value.trim();
    console.log(user_name, email, password, is_grower, location, description);

    if (user_name && email && password && is_grower && location && description) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password, is_grower, location, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);
