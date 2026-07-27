import app from "./firebase-config.js";


import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



// Firebase connections

const auth = getAuth(app);

const db = getFirestore(app);




// VIP Login Form

document.getElementById("vipLoginForm")
.addEventListener("submit", async (e)=>{


    e.preventDefault();



    const email = document.getElementById("vipEmail").value;

    const password = document.getElementById("vipPassword").value;



    try{


        // Login user

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user = userCredential.user;



        // Get user data from Firestore

        const userDoc = await getDoc(
            doc(db,"users",user.uid)
        );



        if(userDoc.exists()){


            const userData = userDoc.data();



            // Check VIP status

            if(userData.role === "vip"){


                alert("💎 Welcome VIP Member!");

                window.location.href="vip.html";


            }


            else{


                alert(
                    "🔒 This account is not a VIP member yet."
                );


            }



        }


        else{


            alert(
                "User profile not found."
            );


        }



    }


    catch(error){


        alert(error.message);


    }



});
