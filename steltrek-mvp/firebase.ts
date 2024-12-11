import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC58tCeXJrsZtbi32Hw8kbI-xwhVDDiGVQ",
  authDomain: "steltrek-mvp.firebaseapp.com",
  projectId: "steltrek-mvp",
  storageBucket: "steltrek-mvp.appspot.com",
  messagingSenderId: "141556608437",
  appId: "1:141556608437:web:6dc6440e99fcf234e5fdfc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
