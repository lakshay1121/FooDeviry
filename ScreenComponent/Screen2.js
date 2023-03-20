import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';

const Screen2 = () => {

    

  return (
    <View style={styles.mainContainer}>
      <Text>Screen2</Text>

      <Text>Value Matched</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
