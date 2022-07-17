import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpPQnUvK7ep4QNLAnX3VVC6SfDWssVL5g",
  authDomain: "e-commerce-b7a4d.firebaseapp.com",
  projectId: "e-commerce-b7a4d",
  storageBucket: "e-commerce-b7a4d.appspot.com",
  messagingSenderId: "1062362809644",
  appId: "1:1062362809644:web:980bcf71aaf6a7bbc99889"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
