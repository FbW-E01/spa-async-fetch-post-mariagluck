// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/
const form = document.querySelector("#submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message  = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

// this is one way without async await

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user)
    })
       .then(response => {
           console.log(response.ok);
           return response.json()   
       })
       .then(result => console.log(user))
       .then(alert("Thank you for submitting your details."))
       
});



///this is with async await 

const url = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.value
    };
    console.log(user);
    getUsers(user);
    alert("Thank you for submitting your details.");
});


const getUsers = async () => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
        });
        return response;
    } catch {
        console.warn("Error");
    }
}

