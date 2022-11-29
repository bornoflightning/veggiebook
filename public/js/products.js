//function for adding a new product 
const newProdHandler = async (event) => {
  event.preventDefault();

  const prodName = document.querySelector('#prodName').value.trim();
  const prodPrice = document.querySelector('#prodPrice').value.trim();
  const prodStock = document.querySelector('#prodStock').value.trim();
  console.log(prodName, prodPrice, prodStock);

  if (prodName && prodPrice && prodStock) {
    //Need to update based on site maps  
    const response = await fetch('/api/users/dashboard', {
          method: 'POST',
          body: JSON.stringify({ prodName, prodPrice, prodStock }),
          headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
          //Need to update based on site maps  
          document.location.replace('/api/users/dashboard');
      } else {
          alert(response.statusText)
      }
  };
}

//Need to adjust the location of the click. Should work but need to test
document.querySelector('.newProdForm').addEventListener('submit', newProdHandler);

//function to get the + button to work


//function to get the - button to work 


//function to remove product
// const delPostHandler = async (event) => {
//     const id = event.target.dataset.id;
//     console.log(id);
//     console.log('You hit the delete button');

//     //replace with proper route of site map
//     const response = await fetch(`/api/users/dashboard/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         //replace with proper route of site map
//         document.location.replace('/api/users/dashboard');
//     }
// }

function delPostHandler() {
  console.log('You hit the delete button');
}

//Need to adjust the location of the click.
document.querySelector('.itemWrapper').addEventListener('click', delPostHandler);