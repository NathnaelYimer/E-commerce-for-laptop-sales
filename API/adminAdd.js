async function addfunction() {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const image_url = document.getElementById('img-url').value
    const description = document.getElementById('description').value
    
    const response = await fetch("http://localhost:3000/store/products/addProduct", {
    method: "POST",
    body: JSON.stringify({name,price,image_url,description}),
    redirect: 'manual',
    headers: {
      "Content-Type": "application/json",
        },
    });
    
    if (response.ok) {
        console.log("Added succesfully!");
        window.location.href = 'updateproductdetails.html';
    }
    else {
        alert("not correct")
    }
}
