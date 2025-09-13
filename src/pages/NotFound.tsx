import { Link } from "react-router-dom";
import error404 from "../../public/error404.svg"
export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <img
src={error404}
alt="404 Not Found"
        className="w-80 h-80 object-contain mb-6"
      />

      <h1 className="text-4xl font-bold text-green-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Oops! The page you are looking for doesn’t exist. It might have been moved or deleted.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}