import { getAuth, sendEmailVerification } from 'firebase/auth';
import firebaseApp from '../firebaseConfig';

export default function Verification() {
  const auth = getAuth(firebaseApp);

  const handleSendVerification = async () => {
    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        alert('Verification email sent!');
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert('Please log in first.');
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      <button onClick={handleSendVerification}>Send Verification Email</button>
    </div>
  );
}
