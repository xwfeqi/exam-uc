import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const routeDetails = {
  1: {
    title: "Historical Center Tour",
    landmarks: [
      { 
        name: "Opera House", 
        coords: [49.843, 24.026], 
        description: "An iconic building for opera performances.",
        image: "/path/to/opera-house.jpg" 
      },
      { 
        name: "City Hall", 
        coords: [49.841, 24.031], 
        description: "The administrative center of the city.",
        image: "/path/to/city-hall.jpg" 
      },
      { 
        name: "Latin Cathedral", 
        coords: [49.841, 24.030], 
        description: "A magnificent cathedral with stunning architecture.",
        image: "/path/to/latin-cathedral.jpg" 
      },
      { 
        name: "Armenian Church", 
        coords: [49.843, 24.030], 
        description: "A historic Armenian church in the city.",
        image: "/path/to/armenian-church.jpg" 
      },
    ],
  },
};

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
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const routeControlRef = useRef(null); // Reference to hold the route control

  const handleLandmarkChange = (e) => {
    const selected = routeDetails[1].landmarks.find(
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
    const map = useMap();  // useMap hook provides access to the map instance
  
    useEffect(() => {
      if (userLocation && selectedLandmark) {
        const userLatLng = L.latLng(userLocation);
        const landmarkLatLng = L.latLng(selectedLandmark.coords);
  
        // Перевірка на існування контролера маршруту
        if (routeControlRef.current) {
          console.log("Removing previous route");
  
          // Очищення всіх точок шляху, використовуючи сам контролер
          routeControlRef.current.setWaypoints([userLatLng, landmarkLatLng]);
        } else {
          // Якщо маршруту ще немає, створюємо новий
          routeControlRef.current = L.Routing.control({
            waypoints: [userLatLng, landmarkLatLng],
            routeWhileDragging: true,
            createMarker: () => null, // Не створюємо маркери для waypoints
          }).addTo(map);
        }
      }
    }, [userLocation, selectedLandmark, map]);
  
    return null;
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
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
          {routeDetails[1].landmarks.map((landmark, index) => (
            <option key={index} value={landmark.name}>
              {landmark.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-3xl h-80 border border-gray-300 rounded-md shadow-md mt-10">
        <MapContainer
          center={userLocation || [49.841, 24.031]} // Default center if userLocation is not set
          zoom={13}
          className="h-full w-full rounded-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <LocationFinder setUserLocation={setUserLocation} setErrorMessage={setErrorMessage} />

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

          {userLocation && selectedLandmark && (
            <Route userLocation={userLocation} selectedLandmark={selectedLandmark} />
          )}
        </MapContainer>
      </div>

      {/* Information Section below the map */}
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
