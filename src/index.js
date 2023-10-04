import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyCyKZmjAdSLD3nFg9fAdYEJtwwXdQB_T5w",
  authDomain: "chat-react-9b7a3.firebaseapp.com",
  projectId: "chat-react-9b7a3",
  storageBucket: "chat-react-9b7a3.appspot.com",
  messagingSenderId: "366454376365",
  appId: "1:366454376365:web:a3ca6ff357b0d6f6280324",
  measurementId: "G-PYPP84T7HD"
});

export const Context  = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase, auth, firestore
  }}>
    <App />
  </Context.Provider>
);
