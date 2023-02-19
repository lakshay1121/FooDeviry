import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Screen2");
        }}
      >
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

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
