import React from 'react';
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4da0b0", "#d39d38"],
    subtitle: "Absence makes the heart grow fonder",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    subtitle: "One swallow does not make a summer",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00c6fb", "#005bea"],
    subtitle: "He’s/She’s no spring chicken",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"],
    subtitle: "Let grass grow under your feet",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f7b733", "#fc4a1a"],
    subtitle: "Like watching grass grow",
  },
  Atmosphere: {
    iconName: "weather-cloudy-alert",
    gradient: ["#89f7fe", "#66a6ff"],
    subtitle: "Fresh as a daisy",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#36d1dc", "#5b86e5"],
    subtitle: "Bright-eyed and bushy-tailed",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4da0b0", "#d39d38"],
    subtitle: "Not a cloud in the sky",
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#d3cbb8", "#6d6027"],
    subtitle: "Head in the clouds",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff",
  },
  title: {
    fontWeight: "300",
    fontSize: 44,
    color: "#fff",
  },
  subtitle: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 22,
    color: "#fff",
  },
  text: {
    marginTop: 15,
    fontWeight: "200",
    fontSize: 15,
    color: "#fff",
  },
});

const Weather = ({temp, condition, description, name}) => {
  console.log(description);
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={weatherOptions[condition].iconName}
            size={96}
            color="#fff"
          />
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.halfContainer}>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Atmosphere",
    "Clouds",
    "Haze",
  ]).isRequired,
};

export default Weather;