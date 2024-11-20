import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

const routes = [
  {
    id: 1,
    title: "Historical Center Tour",
    description: "Explore key landmarks in Lviv's historic center.",
    path: "/route/1",
    image: "https://backiee.com/static/wallpapers/3840x2160/195475.jpg"
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Route Blocks */}
      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto ">
        {routes.map((route) => (
          <Link
            to={route.path}
            key={route.id}
            className="relative group block overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image with Grayscale Filter */}
            <div className="relative w-full h-64 bg-gray-800 mt-32">
              <img
                src={route.image}
                alt={route.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            {/* Title and Description */}
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 p-4">
              <h2 className="text-xl font-semibold">{route.title}</h2>
              <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
