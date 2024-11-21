import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

const routes = [
  {
    id: 1,
    title: "Історичний Львів",
    description: "Explore key landmarks in Lviv's historic center.",
    path: "/route/1",
    image: "https://backiee.com/static/wallpapers/3840x2160/195475.jpg"
  },
  {
    id: 2,
    title: "Релігійні пам’ятки",
    description: "Visit the most famous churches and cathedrals in Lviv.",
    path: "/route/2",
    image: "https://img.freepik.com/premium-photo/winter-view-downtown-lviv-ukraine_697216-6452.jpg"
  },
  {
    id: 3,
    title: "Культурно-мистецькі місця",
    description: "Discover museums, galleries, and theaters.",
    path: "/route/3",
    image: "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Неординарна архітектура",
    description: "Enjoy Lviv’s green spaces and scenic parks.",
    path: "/route/4",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Park_Franko_in_Lviv.jpg/1024px-Park_Franko_in_Lviv.jpg"
  },
];

const DestPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {routes.map((route) => (
          <Link
            to={route.path}
            key={route.id}
            className="relative group flex flex-col items-center overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:scale-105 transition-all duration-500"
          >
            {/* Card Image */}
            <div className="w-full h-48 sm:h-64 md:h-80 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${route.image})` }}>
            </div>

            {/* Text Block */}
            <div className="p-4 flex flex-col items-center justify-center bg-opacity-80 bg-black w-full text-center">
              <h2 className="text-2xl font-bold text-white">{route.title}</h2>
              <p className="text-sm text-gray-300 mt-2">{route.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestPage;
