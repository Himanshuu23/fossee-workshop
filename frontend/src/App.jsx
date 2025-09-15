// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Workshops from "./pages/Workshops";
import Profile from "./pages/Profile";
import AdminRecords from "./pages/Records";
import About from "./pages/About";

export default function App() {
  const isAdmin = true; // Replace with real authentication check

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAdmin={isAdmin} />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
            {isAdmin && <Route path="/admin-records" element={<AdminRecords />} />}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
