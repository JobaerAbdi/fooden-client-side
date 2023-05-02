import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0_iiAki4xzBeTTXPN8t_YV7Z4D9aY-OE",
  authDomain: "fooden-client-side.firebaseapp.com",
  projectId: "fooden-client-side",
  storageBucket: "fooden-client-side.appspot.com",
  messagingSenderId: "69215347684",
  appId: "1:69215347684:web:097141663a1d86dc419df1"
};

const app = initializeApp(firebaseConfig);
export default app;