async function SignIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const first_name = "unused";

    const response = await fetch("http://localhost:3000/auth/signin", {
    method: "POST",
    body: JSON.stringify({ first_name, email, password}),
    redirect: 'manual',
    headers: {
        "Content-Type": "application/json",
        },
    });
    
    if (response.ok) {
        console.log("Added succesfully!");
        window.location.href = './buy.html';
    }
    else {
        const credentialError =  document.getElementById('credential');
        credentialError.innerHTML = 'Email or password not correct!'
    }
}

