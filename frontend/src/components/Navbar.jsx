import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import ProfileDropdown from "./ProfileDropdown";
import { logout, fetchProfile } from "../api/user";

export default function Navbar({ isAdmin, setUser }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef();

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="font-extrabold text-xl tracking-wide">
            Workshop Booking
          </NavLink>
          <div className="hidden md:flex items-center space-x-4 relative">
            <NavLink to="/about">About</NavLink>
            {isAdmin && (
              <NavLink to="/admin-records" className="font-semibold">
                Admin Records
              </NavLink>
            )}
            <div
              ref={profileRef}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-indigo-300 transition relative"
            >
              <span className="text-indigo-600 font-bold">P</span>
              <ProfileDropdown
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                onLogout={handleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
