import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../firebaseConfig';

export default function Logout() {
  const auth = getAuth(firebaseApp);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('You have logged out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


