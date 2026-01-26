import { Link } from "react-router-dom";
const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 ">
      <div className="text-center max-w-lg mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xl">
        <p className="text-9xl font-extrabold text-pink-600 opacity-70 mb-4 tracking-wider">
          404
        </p>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Seite nicht gefunden 😔
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Hoppla! Die von Ihnen gesuchte Seite existiert nicht oder wurde
          verschoben.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-pink-600 hover:bg-black transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Zur Startseite zurückkehren
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;