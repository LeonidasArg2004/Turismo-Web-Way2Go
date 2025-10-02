import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8JE4ZEpBVdiSbFgq19FNcHfC_xjC_2yY",
  authDomain: "way2go-dedd6.firebaseapp.com",
  projectId: "way2go-dedd6",
  storageBucket: "way2go-dedd6.appspot.com",
  messagingSenderId: "565654260731",
  appId: "1:565654260731:web:fec259a76ec55d73ee595e",
  measurementId: "G-CGZH31H4G0"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);