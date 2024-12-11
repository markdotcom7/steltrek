export default function Registration() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      // Add your registration logic here
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Register</h1>
      <form onSubmit={handleSignup} style={{ display: "inline-block", textAlign: "left" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Full Name Input */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            disabled={loading}
          />
        </div>

        {/* Other inputs (e.g., Email, Password, Confirm Password) */}
        {/* Add your email and password fields here */}
        
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: loading ? "#ccc" : "#0070f3",
            color: "#fff",
            border: "none",
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
import Link from "next/link";

export default function Registration() {
  // Your form logic here (state, handlers, etc.)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Register</h1>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        {/* Your form fields */}
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Register
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "#0070f3", textDecoration: "none" }}>
          Log in
        </Link>
      </p>
    </div>
  );
}
