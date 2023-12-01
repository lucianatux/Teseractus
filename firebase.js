import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMozbgNqLBk41NrXNmOh-0cFZhgau4KMI",
  authDomain: "teseractus-ae48f.firebaseapp.com",
  projectId: "teseractus-ae48f",
  storageBucket: "teseractus-ae48f.appspot.com",
  messagingSenderId: "218788112936",
  appId: "1:218788112936:web:86053403a0096af8c8631d",
  measurementId: "G-7CQBRBXJTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export const saveSale = (fecha, nombre, monto, tipoVenta) => {
    console.log(fecha, nombre, monto, tipoVenta);
    addDoc(collection(db, 'ventas'), { fecha, nombre, monto, tipoVenta });
};

export const getSales = () => console.log('sales list');