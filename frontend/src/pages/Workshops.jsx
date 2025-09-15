import { useEffect, useState } from "react";
import { fetchWorkshops } from "../api/workshops";
import WorkshopCard from "../components/WorkshopCard";
import Loader from "../components/Loader";

export default function Workshops() {
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
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Available Workshops</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workshops.map((ws) => (
          <WorkshopCard key={ws.id} workshop={ws} />
        ))}
      </div>
    </div>
  );
}
