import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCa4_KwASqac4J2QT90kQKYrOjQDPuQVkE",
  authDomain: "slfandoms.firebaseapp.com",
  projectId: "slfandoms",
  storageBucket: "slfandoms.firebasestorage.app",
  messagingSenderId: "601220492298",
  appId: "1:601220492298:web:c1d030ea23c08ec36003f3",
  measurementId: "G-P69912QQSG"
};


// Connect Firebase
const app = initializeApp(firebaseConfig);

export default app;
