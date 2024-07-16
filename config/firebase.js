
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKG6tv8kbDZ8R02Le-8Y-u6R-SxyTj9SA",
  authDomain: "my-portfolio-1efb1.firebaseapp.com",
  projectId: "my-portfolio-1efb1",
  storageBucket: "my-portfolio-1efb1.appspot.com",
  messagingSenderId: "1072330104471",
  appId: "1:1072330104471:web:851b6cf4fd8a5dfeb153d2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);