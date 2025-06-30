// Import the functions from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuración del proyecto Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCJi-aZ0Msf_1WuBoaPR2s3OwC7qESvSj0",
  authDomain: "sandbox-cafe-emilianofil.firebaseapp.com",
  projectId: "sandbox-cafe-emilianofil",
  storageBucket: "sandbox-cafe-emilianofil.firebasestorage.app",
  messagingSenderId: "186069047394",
  appId: "1:186069047394:web:c84d9848fad021bca8993b",
  measurementId: "G-72NQV8X3YD"
};

// Si querés seguir usando app y db desde este archivo, podés exportarlos también:
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
