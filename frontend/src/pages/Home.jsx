import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchWorkshops } from "../api/workshops";
import Loader from "../components/Loader";

export default function Home() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkshops()
      .then(setWorkshops)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Discover & Book <br /> Amazing <span className="text-yellow-300">Workshops</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8 opacity-90">
          Learn new skills, connect with experts, and grow your career.  
          Designed to be simple, fast, and mobile-friendly.
        </p>
        <Link
          to="/book"
          className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          Start Booking
        </Link>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Workshops
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.slice(0, 3).map((w, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{w.title}</h3>
              <p className="text-gray-600 mb-4">{w.description}</p>
              <p className="text-sm text-gray-500 mb-4">{w.date}</p>
              <Link
                to="/book"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/workshops"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            See All Workshops
          </Link>
        </div>
      </section>
    </div>
  );
}
