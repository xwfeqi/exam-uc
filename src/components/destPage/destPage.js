import React from "react";
import { Link } from "react-router-dom";

const routes = [
  {
    id: 1,
    title: "Historical Center Tour",
    description: "Explore key landmarks in Lviv's historic center.",
    path: "/route/1",
    image: "https://backiee.com/static/wallpapers/3840x2160/195475.jpg" // Replace with actual image URL
  },
  {
    id: 2,
    title: "Churches & Cathedrals",
    description: "Visit the most famous churches and cathedrals in Lviv.",
    path: "/route/2",
    image: "https://img.freepik.com/premium-photo/winter-view-downtown-lviv-ukraine_697216-6452.jpg"
  },
  {
    id: 3,
    title: "Art & Culture Route",
    description: "Discover museums, galleries, and theaters.",
    path: "/route/3",
    image: "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Parks & Gardens",
    description: "Enjoy Lviv’s green spaces and scenic parks.",
    path: "/route/4",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Park_Franko_in_Lviv.jpg/1024px-Park_Franko_in_Lviv.jpg"
  },
  {
    id: 5,
    title: "Market Square Sights",
    description: "Explore popular attractions around Market Square.",
    path: "/route/5",
    image: "https://manvsclock.com/wp-content/uploads/2021/06/things-to-do-in-lviv.jpg"
  },
];

const DestPage = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Explore Lviv Routes</h1>
      
      {/* Back to Home Button - Taller */}
      <Link to="/" className="mb-8 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Back to Home
      </Link>
      
      {/* Route Blocks */}
      <div className="w-full max-w-screen-lg px-4 space-y-6">
        {routes.map(route => (
          <Link to={route.path} key={route.id} className="block">
            <div className="relative group w-full h-64 bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">
              {/* Image - stretched to full width and height of the block */}
              <img src={route.image} alt={route.title} className="w-full h-full object-cover" />
              
              {/* Dark Overlay on the Image */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Title - Always visible on top of the image */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h2 className="text-2xl font-semibold text-white">{route.title}</h2>
              </div>

              {/* Description - Hidden by default, shown on hover */}
              <p className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {route.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestPage;
