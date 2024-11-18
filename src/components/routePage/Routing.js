import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const Routing = ({ landmarks }) => {
  const map = useMap(); // Get the map instance

  useEffect(() => {
    if (!map || !landmarks || landmarks.length < 2) return;

    let routingControl;

    // Filter valid landmarks with correct coordinates
    const validLandmarks = landmarks.filter(landmark =>
      landmark.coords && 
      Array.isArray(landmark.coords) && 
      landmark.coords.length === 2 &&
      !isNaN(landmark.coords[0]) && 
      !isNaN(landmark.coords[1])
    );

    if (validLandmarks.length < 2) {
      console.error("Not enough valid landmarks to create a route.");
      return;
    }

    try {
      // Create the route control
      routingControl = L.Routing.control({
        waypoints: validLandmarks.map(landmark => L.latLng(landmark.coords)),
        routeWhileDragging: false, // Disable dragging route
        createMarker: () => null, // No markers on the route
        lineOptions: {
          styles: [{ color: "blue", weight: 5, opacity: 1 }],
        },
        draggableWaypoints: false, // Prevent dragging waypoints
        showAlternatives: false, // No alternative routes
      }).addTo(map);

      // Cleanup: Remove route when component unmounts
      return () => {
        if (routingControl && map.hasLayer(routingControl)) {
          map.removeControl(routingControl);
        }
      };
    } catch (error) {
      console.error("Routing error:", error);
    }

    return () => {
      if (routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map, landmarks]); // Re-run effect when landmarks change

  return null;
};

export default Routing;
