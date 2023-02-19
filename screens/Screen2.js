import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Screen1");
        }}
      >
        <Text style={styles.buttonText}>Go Back </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Screen1");
        }}
      >
        <Text style={styles.buttonText}>Go To Screen 3 </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
