async function validateAdmin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch("http://localhost:3000/admin/signin", {
    method: "POST",
    body: JSON.stringify({ username, password}),
    redirect: 'manual',
    headers: {
      "Content-Type": "application/json",
        },
    });
    
    if (response.ok) {
        console.log("Sign up successful!");
        window.location.href = './updateproductdetails.html';
    } else {
        const credentialError =  document.getElementById('credential');
        credentialError.innerHTML = 'Incorrect username or password'
    }

}
