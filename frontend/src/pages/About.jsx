export default function About() {
  return (
    <div className="py-20 bg-white min-h-screen flex justify-center items-center px-6">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          About <span className="text-indigo-600">Workshop Booking</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Workshop Booking is a platform created by <span className="font-semibold">IIT Bombay FOSSEE</span> to help students and professionals discover and register for workshops efficiently.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our focus is on responsive, mobile-first design with a seamless booking experience, empowering users to learn new skills and connect with experts anytime, anywhere.
        </p>
      </div>
    </div>
  );
}
