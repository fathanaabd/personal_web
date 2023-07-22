// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

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
  databaseURL:
    "https://personalweb-8b9f0-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the servic

const dbRef = ref(getDatabase(app));

export default function getAllPortofolio() {
  get(child(dbRef, `portofolio`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return "No data available"
      }
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
