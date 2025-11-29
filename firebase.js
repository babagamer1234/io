// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5iHHWvOKZnKLZCZz5708ALtSkfNdMmrE",
  authDomain: "live-tracker-554a7.firebaseapp.com",
  databaseURL: "https://live-tracker-554a7-default-rtdb.firebaseio.com",
  projectId: "live-tracker-554a7",
  storageBucket: "live-tracker-554a7.appspot.com",
  messagingSenderId: "951695061306",
  appId: "1:951695061306:web:a7b9478538f86f50a36003",
  measurementId: "G-V4LCZSEQLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
