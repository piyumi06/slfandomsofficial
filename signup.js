import app from "./firebase-config.js";

import { 
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { 
    getFirestore,
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const auth = getAuth(app);


document.getElementById("signupForm").addEventListener("submit", (e)=>{

    e.preventDefault();


    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;


    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }


    createUserWithEmailAndPassword(auth,email,password)

   .then(async (userCredential)=>{

    const user = userCredential.user;


    await setDoc(doc(db, "users", user.uid), {

        fullName: document.querySelector('input[placeholder="Enter your full name"]').value,

        displayName: document.querySelector('input[placeholder="How should other fans call you?"]').value,

        email: user.email,

        fandom: document.querySelector("select").value,

        joinedDate: new Date()

    });


    alert("🎉 Welcome to SLFO! Your account has been created.");

    window.location.href="index.html";


})
    .catch((error)=>{

        alert(error.message);

    });


});
