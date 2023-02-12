async function signUp () {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);

    const first_name = formData.get('username');
    const email =  formData.get('email');
    const password =  formData.get('password');
    const last_name = 'randonstuff';


    console.log(username);
    console.log(email);
    console.log(password);

    const response = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    body: JSON.stringify({ first_name,last_name, email, password }),
    redirect: 'manual',
    headers: {
      "Content-Type": "application/json",
        },
    });
    
    if (response.ok) {
        console.log("Sign up successful!");
        window.location.href = './buy.html';
    } else {
        const credentialError =  document.getElementById('credential');
        credentialError.innerHTML = 'Email or user name already exists'
    }
}