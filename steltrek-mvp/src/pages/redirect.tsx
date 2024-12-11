import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/"); // Redirects to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Redirect Page</h1>
      <button
        onClick={handleRedirect}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Home
      </button>
    </div>
  );
};

export default RedirectPage;
