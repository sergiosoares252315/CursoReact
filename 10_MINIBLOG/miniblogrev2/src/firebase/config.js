// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKgFwGN4BKBjelh3WZErd1Bk1RezQ2eh0",
    authDomain: "miniblogrev2.firebaseapp.com",
    projectId: "miniblogrev2",
    storageBucket: "miniblogrev2.firebasestorage.app",
    messagingSenderId: "677960018974",
    appId: "1:677960018974:web:f84340f97ecc9c9d3bd20f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };