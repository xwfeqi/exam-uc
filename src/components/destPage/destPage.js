import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { id: 1, title: "Historical Center Tour", description: "Explore key landmarks in Lviv's historic center.", path: "/route/1" },
  { id: 2, title: "Churches & Cathedrals", description: "Visit the most famous churches and cathedrals in Lviv.", path: "/route/2" },
  { id: 3, title: "Art & Culture Route", description: "Discover museums, galleries, and theaters.", path: "/route/3" },
  { id: 4, title: "Parks & Gardens", description: "Enjoy Lviv’s green spaces and scenic parks.", path: "/route/4" },
  { id: 5, title: "Market Square Sights", description: "Explore popular attractions around Market Square.", path: "/route/5" },
];

const DestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Explore Lviv Routes</h1>
      
      {/* Back to Home Button */}
      <Link to="/" className="mb-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Back to Home
      </Link>
      
      {/* Route Blocks */}
      <div className="w-full max-w-screen-lg px-4 space-y-6">
        {routes.map(route => (
          <Link to={route.path} key={route.id} className="block">
            <div className="w-full bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{route.title}</h2>
              <p className="text-gray-600">{route.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestPage;
