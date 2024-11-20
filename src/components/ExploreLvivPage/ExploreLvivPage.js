import React from "react";
import { Link } from "react-router-dom";

const elements = [
  { id: 1, title: "Маршрути", description: "Перейдіть", path: "dest-page" },
  { id: 2, title: "Місця", description: "Перейдіть", path: "/places" },
  { id: 4, title: "Памятники", description: "Перейдіть", path: "/events" },
];

const ExploreLvivPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
      <div
        className="relative w-full max-w-screen-xl h-[500px] flex space-x-[1px]"
        style={{
          backgroundImage: `url('https://static3.bigstockphoto.com/5/8/3/large1500/385809632.jpg')`, // Replace with your actual background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {elements.map((element, index) => (
          <Link
            to={element.path}
            key={element.id}
            className="flex-1 flex items-end relative group overflow-hidden"
          >
            {/* Background Overlay for Darker Initial Look */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>

            {/* Text Content Positioned Higher */}
            <div className="relative z-10 text-center text-white p-4 mb-10 transition-all duration-300 group-hover:transform group-hover:-translate-y-4">
              <div className="text-2xl font-semibold mb-1">{element.title}</div>
              <div className="text-sm">{element.description}</div>
            </div>

            {/* Arrow Icon (Visible on Hover) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              &#10132;
            </div>

            {/* Number in top left corner */}
            <div className="absolute top-2 left-2 text-white text-sm font-bold z-10">{`0${index + 1}`}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreLvivPage;
