export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Workshop Booking. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    );
  }
  