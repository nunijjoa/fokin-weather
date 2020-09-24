import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import Axios from "axios";
import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "9873a8c2706ec62da160e96ad72e9f8b";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);

  const getWeather = async (lat, lon) => {
    const { data } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    console.log(data);
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("error");
          setErrorMsg("Permission to access location was denied");
        }
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        getWeather(latitude, longitude);
      } catch (e) {
        setLoading(false);
        setErrorMsg("어떤 에러");
        Alert.alert("error");
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading errorMsg={errorMsg} />
      ) : (
        <Weather
          temp={Math.round(weather.main.temp)}
          condition={weather.weather[0].main}
          description={weather.weather[0].description}
          name={weather.name}
        />
      )}
    </>
  );
};

export default App;