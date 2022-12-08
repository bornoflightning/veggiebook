const searchFormHandler = async (event) => {
    event.preventDefault();
    const zipcode = document.querySelector('#searchbar').value.trim();
    setTimeout(() => {
        document.location.replace(`/search`);
    }, 1000);
    const response = await fetch('/search', {
        method: 'POST',
        body:''
    })

    // Collect values from the login form
    console.log(growerlist);

    if (zipcode) {
        //Need to adjust the route below based on site map. 

        // Need to adjust the route below based on site map. 
    } else {
        alert(response.statusText);
    }

  }  ;
document.querySelector('#search').addEventListener('submit', searchFormHandler);