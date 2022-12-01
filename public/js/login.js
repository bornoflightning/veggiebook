const loginFormHandlerGrower = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const user_name = document.querySelector('#usernameLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();
  console.log(user_name, password);

  if (user_name && password) {
    //Need to adjust the route below based on site map. 
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Need to adjust the route below based on site map. 
      setTimeout(() => {
        document.location.replace('/growerProfile');
      }, 1000);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.loginForm').addEventListener('submit', loginFormHandlerGrower);

  const loginFormHandlerBuyer = async (event) => {
    event.preventDefault();
    console.log(event);
  
  
    // Collect values from the login form
    const user_name = document.querySelector('#usernameLoginBuyer').value.trim();
    const password = document.querySelector('#passwordLoginBuyer').value.trim();
  
    if (user_name && password) {
      //Need to adjust the route below based on site map. 
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });  
  
      if (response.ok) {
        // Need to adjust the route below based on site map. 
        document.location.replace('/growerProfile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
document.querySelector('.buyerLoginForm').addEventListener('submit', loginFormHandlerBuyer);