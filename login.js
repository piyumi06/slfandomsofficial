import app from "./firebase-config.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("Welcome back to SLFO! 🎉");

            window.location.href = "members.html";

        })

        .catch((error) => {

            alert(error.message);

        });

});
