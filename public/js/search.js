const searchFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const zipcode = document.querySelector('#searchbar').value.trim();
    console.log(zipcode);

    if (zipcode) {
        //Need to adjust the route below based on site map. 

        // Need to adjust the route below based on site map. 
        setTimeout(() => {
            document.location.replace(`/searchResults/:${zipcode}`);
        }, 1000);
    } else {
        alert(response.statusText);
    }

  }  ;
document.querySelector('#search').addEventListener('submit', searchFormHandler);