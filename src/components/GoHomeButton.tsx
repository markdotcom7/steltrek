import { useRouter } from "next/router";

const GoHomeButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/"); // Redirects to the home page
  };

  return <button onClick={handleRedirect}>Go Home</button>;
};

export default GoHomeButton;
