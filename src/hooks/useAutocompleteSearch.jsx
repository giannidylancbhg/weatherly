import { useEffect, useState } from "react";
import { getCityList } from "../api/cityListApi";

export default function useSearch(location) {
  const [cityList, setCityList] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location.trim()) {
      setCityList({});
      setError("");
      setCoordinates({});
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const data = await getCityList(location);

        setCityList(data);
        setCoordinates({
          lat: data[0]?.lat,
          lon: data[0]?.lon,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return { cityList, coordinates, setCoordinates, loading, error };
}
