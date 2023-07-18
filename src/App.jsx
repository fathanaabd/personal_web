// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOeV1WCp-2rKyy5snT1Dnp48cuNNCM0W0",
  authDomain: "personalweb-8b9f0.firebaseapp.com",
  projectId: "personalweb-8b9f0",
  storageBucket: "personalweb-8b9f0.appspot.com",
  messagingSenderId: "178921788338",
  appId: "1:178921788338:web:937873e8912d8fa895caab",
  measurementId: "G-2RV99QX0XP",
};

export default function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <>
      <h1 className="text-3xl font-bold">React starter</h1>
      <h3 className="text-2xl font-light">
        Vite, React, TailwindCSS, Prettier + ESLint, Firebase
      </h3>
    </>
  );
}
