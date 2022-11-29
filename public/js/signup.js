const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
    const is_grower = document.querySelector('#isGrower').value;
    const location = document.querySelector('#location').value.trim();
    const userDesc = document.querySelector('#userDesc').value.trim();

    if (user_name && email && password && is_grower && location && userDesc) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_name, email, password, is_grower, location }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        //document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);
