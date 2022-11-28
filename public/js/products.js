//function for adding a new product 

//function to get the + button to work

//function to get the - button to work 

//function to remove product
const delPostHandler = async (event) => {
    const id = event.target.dataset.id;
    console.log(id);

    //replace with proper route of site map
    const response = await fetch(`/api/users/dashboard/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        //replace with proper route of site map
        document.location.replace('/api/users/dashboard');
    }
}

document.querySelector('.itemWrapper').addEventListener('click', delPostHandler);