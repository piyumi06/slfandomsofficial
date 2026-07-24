<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCa4_KwASqac4J2QT90kQKYrOjQDPuQVkE",
    authDomain: "slfandoms.firebaseapp.com",
    projectId: "slfandoms",
    storageBucket: "slfandoms.firebasestorage.app",
    messagingSenderId: "601220492298",
    appId: "1:601220492298:web:c1d030ea23c08ec36003f3",
    measurementId: "G-P69912QQSG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
