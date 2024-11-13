import React from "react";
import { useParams } from "react-router-dom";

const routeDetails = {
  1: {
    title: "Historical Center Tour",
    landmarks: ["Opera House", "City Hall", "Latin Cathedral", "Armenian Church"],
  },
  2: {
    title: "Churches & Cathedrals",
    landmarks: ["St. George's Cathedral", "Dormition Church", "Latin Cathedral", "Armenian Cathedral"],
  },
  3: {
    title: "Art & Culture Route",
    landmarks: ["Lviv Art Gallery", "National Museum", "Les Kurbas Theater", "Potocki Palace"],
  },
  4: {
    title: "Parks & Gardens",
    landmarks: ["Stryiskyi Park", "Ivan Franko Park", "Shevchenkivskyi Hai"],
  },
  5: {
    title: "Market Square Sights",
    landmarks: ["Italian Courtyard", "Pharmacy Museum", "Boim Chapel"],
  },
};

const RoutePage = () => {
  const { id } = useParams();
  const route = routeDetails[id];

  if (!route) {
    return <p>Route not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">{route.title}</h1>
      <ul className="list-disc list-inside text-lg text-gray-700">
        {route.landmarks.map((landmark, index) => (
          <li key={index}>{landmark}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoutePage;
