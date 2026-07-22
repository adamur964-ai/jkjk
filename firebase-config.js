// Trust Bank (TB) - Firebase Configuration Standard v12.16.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5xd_XuEBP9kWkJepiHMcN5YI12g_OCUw",
    authDomain: "trustbank-91e66.firebaseapp.com",
    projectId: "trustbank-91e66",
    storageBucket: "trustbank-91e66.firebasestorage.app",
    messagingSenderId: "503416043337",
    appId: "1:503416043337:web:0e05859102033e6caacc98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export instances for use across the flat folder structure
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ADMIN_EMAIL = "adamumuhammedrabiu69@gmail.com";
