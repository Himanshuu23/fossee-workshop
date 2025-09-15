import { useState } from "react";
import { createBooking } from "../api/bookings";

export default function BookingModal({ isOpen, onClose, workshop }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleConfirmBooking = async () => {
    setLoading(true);
    setError("");
    try {
      await createBooking({
        workshopId: workshop.id,
        title: workshop.title,
        date: workshop.date,
        location: workshop.location,
      });
      onClose();
    } catch (err) {
      setError("Failed to book workshop. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Booking</h2>
        <p className="text-gray-700 mb-2 text-center">
          You are about to book the workshop: 
          <span className="font-semibold"> {workshop.title}</span>
        </p>
        <p className="text-gray-600 text-sm mb-4 text-center">
          Date: {workshop.date} | Location: {workshop.location}
        </p>
        {error && <p className="text-red-600 text-sm mb-2 text-center">{error}</p>}
        <button
          onClick={handleConfirmBooking}
          disabled={loading}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mb-2"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
        <button
          onClick={onClose}
          className="w-full py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
