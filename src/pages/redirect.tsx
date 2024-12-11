import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleRedirect}>Go Home</button>
    </div>
  );
}

