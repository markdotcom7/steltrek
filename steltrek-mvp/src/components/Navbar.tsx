import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
      <div>
        <Link href="/">
          <a style={{ marginRight: "20px" }}>Home</a>
        </Link>
        <Link href="/about">
          <a style={{ marginRight: "20px" }}>About</a>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <a style={{ marginRight: "20px" }}>Login</a>
        </Link>
        <Link href="/logout">
          <a>Logout</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
