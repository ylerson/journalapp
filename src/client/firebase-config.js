// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDhbobQZnY5Yd31fq2Pdd-PO7DTKfPAurk',
    authDomain: 'journal-app-60a4a.firebaseapp.com',
    projectId: 'journal-app-60a4a',
    storageBucket: 'journal-app-60a4a.appspot.com',
    messagingSenderId: '792765810657',
    appId: '1:792765810657:web:f4a34eba9112b6ea0cb4a0',
    measurementId: 'G-9BDLTN93H1'
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db =  firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};