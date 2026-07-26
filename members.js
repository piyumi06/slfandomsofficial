import app from "./firebase-config.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Logged in:", user.email);

    } else {

        alert("Please log in first.");

        window.location.href = "login.html";

    }

});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {

    signOut(auth).then(() => {

        window.location.href = "index.html";

    });

});
