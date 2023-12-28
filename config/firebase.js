import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPc6wO-9WUALMjmrqG57khoOTs2YRFNDI",
  authDomain: "my-portfolio-a052e.firebaseapp.com",
  projectId: "my-portfolio-a052e",
  storageBucket: "my-portfolio-a052e.appspot.com",
  messagingSenderId: "651279093775",
  appId: "1:651279093775:web:a40047bbab00565c3f937a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);