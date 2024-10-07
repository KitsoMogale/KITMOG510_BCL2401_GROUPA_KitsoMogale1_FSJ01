import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "nextjs-bd723.firebaseapp.com",
    projectId: "nextjs-bd723",
    storageBucket: "nextjs-bd723.appspot.com",
    messagingSenderId: "295469364472",
    appId: "1:295469364472:web:6fdf2176588eecea2c370d"
  };

const app = initializeApp(firebaseConfig);
console.log(app)

export default app;