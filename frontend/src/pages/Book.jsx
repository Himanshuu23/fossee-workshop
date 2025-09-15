import { useState } from "react";
import BookingModal from "../components/Booked";
import { createBooking } from "../api/bookings";
import Loader from "../components/Loader";

export default function Book() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState({ title: "React Basics", date: "2025-09-15", location: "Online" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createBooking({
        workshopId: selectedWorkshop.id,
        title: selectedWorkshop.title,
        date: selectedWorkshop.date,
        location: selectedWorkshop.location,
      });
      setIsModalOpen(true);
    } catch (err) {
      setError("Failed to book workshop. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Book Your <span className="text-indigo-600">Workshop</span>
        </h2>
        <form onSubmit={handleBooking} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Workshop</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={selectedWorkshop.title}
              onChange={(e) => setSelectedWorkshop({ ...selectedWorkshop, title: e.target.value })}
            >
              <option>Python Basics</option>
              <option>Web Development</option>
              <option>Machine Learning</option>
            </select>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
            {loading ? <Loader /> : "Confirm Booking"}
          </button>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        workshop={selectedWorkshop}
      />
    </div>
  );
}
