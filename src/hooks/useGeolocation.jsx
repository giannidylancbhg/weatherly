import { useState, useEffect } from "react";
import { getLocation } from "../api/geolocationApi";

export default function useGeolocation() {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const coordinates = await getLocation();
        setCoordinates(coordinates);
      } catch (error) {
        setError(error.message);
      }
    };

    loadLocation();
  }, []);

  return { coordinates };
}
