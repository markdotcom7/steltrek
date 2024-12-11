import { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Adjust path as needed
import { useAuth } from "../context/authContext"; // Assuming AuthContext is set up

export default function Dashboard() {
  const { user } = useAuth(); // Get the authenticated user from context
  const router = useRouter();

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase Auth
      router.push("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Show loading while user state is being resolved
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Dashboard!</h1>
      <p>Logged in as: {user.email}</p>
      <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
        Logout
      </button>
    </div>
  );
}
