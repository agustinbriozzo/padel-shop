import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCManluJDzt3Yyc7KtHPVBKYvgDhW0g02c",
    authDomain: "padel-shop-4e7f2.firebaseapp.com",
    projectId: "padel-shop-4e7f2",
    storageBucket: "padel-shop-4e7f2.appspot.com",
    messagingSenderId: "637547499921",
    appId: "1:637547499921:web:23f8a025299fceb7590a30"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
