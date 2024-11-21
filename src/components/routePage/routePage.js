import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useParams } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

// Дані про маршрути
const routeDetails = {
  1: {
    title: "Історичний Львів",
    landmarks: [
      {
        name: "Монастир святого Онуфрія",
        coords: [49.849013, 24.028445],
        description: "An iconic building for opera performances.",
        image: "/images/mon St. Onufrii.png",
      },
      {
        name: "Храм святого Івана Хрестителя",
        coords: [49.846870, 24.030516],
        description: "The administrative center of the city.",
        image: "/images/Temple st. ivana hrestytelia.png",
      },
      {
        name: "Будинок вчених",
        coords: [49.841051, 24.021625],
        description: "A magnificent cathedral with stunning architecture.",
        image: "/images/house of scientists.png",
      },
      {
        name: "Галицька ощадна каса",
        coords: [49.841131, 24.027344],
        description: "A historic Armenian church in the city.",
        image: "/images/Galyckia oshchadna kasa.png",
      },
    ],
  },
  2: {
    title: "Архітектурні шедеври",
    landmarks: [
      {
        name: "Вілла Бачевських",
        coords: [49.829919, 24.024488],
        description: "An iconic building for opera performances.",
        image: "/images/Villa Bachevskih.png",
      },
      {
        name: "Палац графа Голуховського",
        coords: [49.840207, 24.018755],
        description: "The administrative center of the city.",
        image: "/images/Palaca grafa Goluhovskiogo.png",
      },
      {
        name: "Будинок страхового товариства 'Дністер'",
        coords: [49.841808, 24.035134],
        description: "A magnificent cathedral with stunning architecture.",
        image: "/images/Budynok Dnister.png",
      },
      {
        name: "Палац Семенських-Левицьких",
        coords: [49.838827, 24.040265],
        description: "A historic Armenian church in the city.",
        image: "/images/Palac Semenskih-levyckih.png",
      },
    ],
  },
  3: {
    title: "Замки та палаци",
    landmarks: [
      {
        name: "Палац Туркулів-Комелло",
        coords: [49.836448, 24.045299],
        description: "An iconic building for opera performances.",
        image: "/images/Palac Turkuliv-Komello.png",
      },
      {
        name: "Палац Сосновського",
        coords: [49.831609, 24.010354],
        description: "The administrative center of the city.",
        image: "/images/Palac Sosnovskogo.png",
      },
      {
        name: "Палац Семенських-Левицьких",
        coords: [49.841808, 24.035134],
        description: "A magnificent cathedral with stunning architecture.",
        image: "/images/Budynok Dnister.png",
      },
      {
        name: "Палац Семенських-Левицьких",
        coords: [49.838827, 24.040265],
        description: "A historic Armenian church in the city.",
        image: "/images/Palac Semenskih-levyckih.png",
      },
    ],
  },
};

// Компонент для отримання геолокації користувача
const LocationFinder = ({ setUserLocation, setErrorMessage }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setUserLocation([latitude, longitude]);
        },
        () => {
          setErrorMessage("Location access denied. Using default location.");
          setUserLocation([49.841, 24.031]); // Default location
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported on this device. Using default location.");
      setUserLocation([49.841, 24.031]); // Default location
    }
  }, [setUserLocation, setErrorMessage]);

  return null;
};

const RouteMap = () => {
  const { id } = useParams(); // Отримуємо ID маршруту з URL
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [landmarks, setLandmarks] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const routeControlRef = useRef(null);

  useEffect(() => {
    const route = routeDetails[id];
    if (route) {
      setLandmarks(route.landmarks);
    } else {
      setLandmarks([]);
    }
  }, [id]);

  const handleLandmarkChange = (e) => {
    const selected = landmarks.find(
      (landmark) => landmark.name === e.target.value
    );
    setSelectedLandmark(selected);
  };

  const customIcon = new L.Icon({
    iconUrl: "/images/location.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const Route = ({ userLocation, selectedLandmark }) => {
    const map = useMap(); // useMap hook provides access to the map instance

    useEffect(() => {
      if (userLocation && selectedLandmark) {
        const userLatLng = L.latLng(userLocation);
        const landmarkLatLng = L.latLng(selectedLandmark.coords);

        // Перевірка на існування контролера маршруту
        if (routeControlRef.current) {
          routeControlRef.current.setWaypoints([userLatLng, landmarkLatLng]);
        } else {
          routeControlRef.current = L.Routing.control({
            waypoints: [userLatLng, landmarkLatLng],
            routeWhileDragging: true,
            createMarker: () => null,
            show: false,
          }).addTo(map);
        }

        // Видалення контейнера з DOM
        const routingContainer = document.querySelector(".leaflet-routing-container");
        if (routingContainer) {
          routingContainer.remove();
        }
      }
    }, [userLocation, selectedLandmark, map]);

    return null;
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Вибір пам’ятки */}
      <div className="absolute z-10 top-4 right-4 bg-white p-4 shadow-md rounded-lg">
        <label htmlFor="landmark-select" className="block text-gray-700 font-medium mb-2">
          Select a Landmark:
        </label>
        <select
          id="landmark-select"
          value={selectedLandmark ? selectedLandmark.name : ""}
          onChange={handleLandmarkChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="" disabled>Select a landmark</option>
          {landmarks.map((landmark, index) => (
            <option key={index} value={landmark.name}>
              {landmark.name}
            </option>
          ))}
        </select>
      </div>

      {/* Компонент для отримання геолокації */}
      <LocationFinder setUserLocation={setUserLocation} setErrorMessage={setErrorMessage} />

      {/* Карта */}
      <div className="w-full max-w-3xl h-80 border border-gray-300 rounded-md shadow-md mt-10">
        <MapContainer
          center={userLocation || [49.841, 24.031]}
          zoom={13}
          className="h-full w-full rounded-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {userLocation && (
            <Marker position={userLocation} icon={customIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          )}

          {selectedLandmark && (
            <Marker position={selectedLandmark.coords} icon={customIcon}>
              <Popup>{selectedLandmark.name}</Popup>
            </Marker>
          )}

          <Route userLocation={userLocation} selectedLandmark={selectedLandmark} />
        </MapContainer>
      </div>

      {/* Інформація про пам’ятку */}
      {selectedLandmark && (
        <div className="w-full max-w-3xl mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{selectedLandmark.name}</h2>
          <div className="flex">
            <img
              src={selectedLandmark.image}
              alt={selectedLandmark.name}
              className="w-48 h-32 object-cover rounded-lg mr-6"
            />
            <p className="text-gray-700">{selectedLandmark.description}</p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="w-full max-w-3xl text-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow-md mb-8">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default RouteMap;
