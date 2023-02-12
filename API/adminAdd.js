async function nfunction() {
    event.preventDefault();


    const name = document.getElementById('name').value
    const price = document.getElementById('Price').value
    const image = document.getElementById('Image').value
    const description = document.getElementById('description').value
    
    const response = await fetch("http://localhost:3000/store/products/addProduct", {
    method: "POST",
    body: JSON.stringify({name,price,image,description }),
    redirect: 'manual',
    headers: {
      "Content-Type": "application/json",
        },
    });
    
    if (response.ok) {
        console.log("Added succesfully!");
        window.location.href = 'updateproductdetails.html';
    }
}