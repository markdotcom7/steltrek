import { auth } from "./firebaseConfig"; // Import auth object
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

/**
 * Logs in a user with email and password
 * @param email - User's email
 * @param password - User's password
 */
export async function loginUser(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password);
}

/**
 * Logs out the current user
 */
export async function logoutUser() {
  await signOut(auth);
}
