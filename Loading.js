import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aa',
  },
  text: {
    fontSize: 20,
    color: '#2c2c2c',
  }
});

const Loading = ({ errorMsg }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>
        {errorMsg ? { errorMsg } : "Getting the fucking weather"}
      </Text>
    </View>
  );
};

export default Loading;