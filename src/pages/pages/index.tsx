import GoHomeButton from "../components/GoHomeButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <GoHomeButton />
    </div>
  );
}
