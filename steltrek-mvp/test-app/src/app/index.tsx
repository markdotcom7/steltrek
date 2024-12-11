import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to StelTrek!</h1>
      <p>Prepare for the next frontier of space exploration!</p>
      <div style={{ marginTop: "20px" }}>
        <Link href="/about">
          <a style={{ marginRight: "20px" }}>About Us</a>
        </Link>
        <Link href="/login">
          <a style={{ marginRight: "20px" }}>Login</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}






