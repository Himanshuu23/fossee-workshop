import { Link } from "react-router-dom";

export default function NavLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`text-white hover:text-gray-200 transition ${className}`}
    >
      {children}
    </Link>
  );
}
