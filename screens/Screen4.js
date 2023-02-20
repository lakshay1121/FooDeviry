import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Screen4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/screen4background.jpeg")}
        style={styles.backgroundimg}
      >
        <View style={styles.greetingsAndSlangContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome Lakshay</Text>
          </View>

          <View style={styles.slangContainer}>
            <Text style={styles.slang}>
              Feel the love of homemade {"\n"} food even from away {"\n"} the
              home..
            </Text>
          </View>
        </View>

        <View style={styles.selectLocationContainer}>
          <Text style={styles.selectLocationText}>Select Location</Text>

          <TouchableOpacity style={styles.locateMeContainer} onPress={()=>{navigation.navigate('Screen5')}}>
            <Text style={styles.locateMeText}>Locate Me</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          <TouchableOpacity style={styles.provideLocationContainer}>
            <Text style={styles.provideLocationText}>
              Provide Delivery Location
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  backgroundimg: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  greetingsAndSlangContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  locateMeContainer: {
    height: 65,
    borderWidth: 0,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#B76C53",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  locateMeText: {
    fontSize: 20,
    color: "white",
  },

  orText: {
    padding: 20,
    fontSize: 18,
    fontWeight: "500",
  },

  provideLocationContainer: {
    height: 65,
    margin: 9,
    borderWidth: 0,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#B76C53",
    paddingLeft: 25,
    display: "flex",
    flexDirection: "row",
    borderRadius: 25,
    alignItems: "center",
  },
  provideLocationLogo: {},

  provideLocationText: {
    fontSize: 20,
    color: "white",
  },

  slang: {
    fontSize: 18,
    color: "grey",
    padding: 20,
  },
  selectLocationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectLocationText: {
    fontSize: 22,
    fontWeight: "700",
    padding: 20,
  },
  welcomeContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },

  welcomeText: {
    color: "#E87A74",
    fontSize: 32,
    fontWeight: "bolder",
  },
});

// backgroundColor: "#B76C53",
