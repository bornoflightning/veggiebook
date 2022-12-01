//function for adding a new product 
const newProdHandler = async (event) => {
  event.preventDefault();

  const product_name = document.querySelector('#prodName').value.trim();
  const price = document.querySelector('#prodPrice').value.trim();
  const stock = document.querySelector('#prodStock').value.trim();
  console.log(prodName, prodPrice, prodStock);

  if (product_name && price && stock) {
    //Need to update based on site maps  
    const response = await fetch('/growerProfile', {
          method: 'POST',
          body: JSON.stringify({ product_name, price, stock }),
          headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
          //Need to update based on site maps  
          document.location.replace('/growerProfile');
      } else {
          alert(response.statusText)
      }
  };
}

//Need to adjust the location of the click. Should work but need to test
document.querySelector('.newProdForm').addEventListener('submit', newProdHandler);


//function to remove product
// const delPostHandler = async (event) => {
//     const id = event.target.dataset.id;
//     console.log(id);
//     console.log('You hit the delete button');

//     //replace with proper route of site map
//     const response = await fetch(`/profile/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         //replace with proper route of site map
//         document.location.replace('/profile/');
//     }
// }

// //Need to adjust the location of the click.
// document.querySelector('.itemWrapper').addEventListener('click', delPostHandler);