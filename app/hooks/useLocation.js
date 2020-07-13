import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  //using custom hooks (always have use+Filename)
  //it encapsulates some state and some login around that state in a single place
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude }, //destructing
      } = await Location.getLastKnownPositionAsync(); //faster than getCurrentPosition, but not as accurate as the getCurrentPosition
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
