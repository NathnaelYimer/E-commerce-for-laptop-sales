const form = {
    userName: document.getElementById('userName'),
    password: document.getElementById('password'),
    submit: document.getElementsById('submit'),
};


let button = form.submit.addEventListener("click", (e)=> {
    e.preventDefault();
    const login = '';

    fetch(login, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: form.userName.value,
            password: form.password.value,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => {
            console.log(err);
           });
});




