import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const routeDetails = {
  1: {
    title: "Historical Center Tour",
    landmarks: [
      { name: "Opera House", coords: [49.843, 24.026] },
      { name: "City Hall", coords: [49.841, 24.031] },
      { name: "Latin Cathedral", coords: [49.841, 24.030] },
      { name: "Armenian Church", coords: [49.843, 24.030] },
    ],
  },
  2: {
    title: "Churches & Cathedrals",
    landmarks: [
      { name: "St. George's Cathedral", coords: [49.838, 24.016] },
      { name: "Dormition Church", coords: [49.840, 24.032] },
      { name: "Latin Cathedral", coords: [49.841, 24.030] },
      { name: "Armenian Cathedral", coords: [49.843, 24.030] },
    ],
  },
};

const LocationFinder = ({ setUserLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setUserLocation([latitude, longitude]);
          map.setView([latitude, longitude], 13);
        },
        () => alert("Unable to access your location")
      );
    }
  }, [map, setUserLocation]);

  return null;
};

const RouteMap = () => {
  const [selectedRoute, setSelectedRoute] = useState("1");
  const [userLocation, setUserLocation] = useState(null);
  const route = routeDetails[selectedRoute];

  return (
    <div className="relative min-h-screen">
      <div className="absolute z-10 top-4 right-4 bg-white p-2 shadow-md rounded-md">
        <select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
          className="p-2 border rounded-md"
        >
          {Object.keys(routeDetails).map((id) => (
            <option key={id} value={id}>
              {routeDetails[id].title}
            </option>
          ))}
        </select>
      </div>

      <MapContainer center={[49.841, 24.031]} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <LocationFinder setUserLocation={setUserLocation} />

        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.icon({
              iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          />
        )}

        {route.landmarks.map((landmark, index) => (
          <Marker key={index} position={landmark.coords} />
        ))}

        {userLocation && (
          <Polyline
            positions={[userLocation, route.landmarks[0].coords]} // Маршрут до першого обраного орієнтира
            color="blue"
          />
        )}
      </MapContainer>
    </div>
  );
};

export default RouteMap;
