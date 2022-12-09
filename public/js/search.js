const searchFormHandler = async (event) => {
    event.preventDefault();
    const zip1 = document.querySelector('#searchbar').value.trim();
    const zip2 = document.querySelector('#growerSearchbar').value.trim();
    
    setTimeout(() => {
        document.location.replace(`/search/:${zip1}/:${zip2}`);
    }, 1000);
    const response = await fetch(`/search/:${zip1}/:${zip2}`, {
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