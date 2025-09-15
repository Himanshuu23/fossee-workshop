import { Link } from "react-router-dom";

export default function WorkshopCard({ workshop }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{workshop.title}</h3>
      <p className="text-gray-500 text-sm mb-1">
        {workshop.date} · {workshop.location}
      </p>
      <p className="text-gray-700 mb-3 line-clamp-3">{workshop.description}</p>
      <Link
        to="/book"
        className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
      >
        Book Now
      </Link>
    </div>
  );
}
