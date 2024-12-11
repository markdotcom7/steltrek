import { auth } from "./firebaseConfig"; // This import goes at the very top
import { auth } from "./firebaseConfig";
export default function FirebaseTest() {
  console.log(auth); // Log the auth object to verify Firebase initialization
  return <h1>Firebase Configured!</h1>; // Render this message to the page
}



