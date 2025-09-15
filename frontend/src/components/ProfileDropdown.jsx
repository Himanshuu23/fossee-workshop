import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ProfileDropdown({ isOpen, onClose, onLogout }) {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-14 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <div className="flex flex-col p-2 space-y-2">
        <Link
          to="/profile"
          onClick={onClose}
          className="w-full py-2 px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center"
        >
          View Profile
        </Link>
        <button
          onClick={onLogout}
          className="w-full py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
