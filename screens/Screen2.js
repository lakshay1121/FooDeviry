import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={require("../images/desithali.png")} style={styles.img} />
      </View>
      <View style={styles.secondsection}>
        <View style={styles.loginSignupContainer}>
          <TouchableOpacity style={styles.loginContainer} onPress={() => { navigation.navigate('LoginPage') }}  >
            <Text style={styles.loginSignupText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupContainer} onPress={() => { navigation.navigate('SignupPage') }}>
            <Text style={styles.loginSignupText}>Sign-up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.provideruser} >
          <View style={styles.provider}>
            <TouchableOpacity style={styles.providercontainer} onPress={() => { navigation.navigate('LoginPage') }}  >
              <Text style={styles.providertext}>Provider</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user}>
            <TouchableOpacity style={styles.usercontainer} onPress={() => { navigation.navigate('LoginPage') }}  >
              <Text style={styles.usertext}>User</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotpassword} onPress={() => { navigation.navigate('LoginPage') }}  >
          <Text style={styles.password}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.loginIconsContainer}>

          <Image
            source={require("../images/googleIcon.png")}
            style={{ width: 50, height: 40 }}
          />
          <Image
            source={require("../images/facebookIcon.png")}
            style={{ width: 40, height: 38 }}
          />
        </View>

      </View>


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
    backgroundColor: "#fae2e1",
    alignItems: "center",
    justifyContent: "center",
  },

  loginContainer: {
    marginRight: 150,
    borderBottomWidth: 2.5,
    borderBottomEndRadius: 0.1,
    borderBottomColor: "black",
  },

  loginSignupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50,
  },

  loginSignupText: {
    fontSize: 16,
    fontWeight: "700",
  },
  signupContainer: {

    borderBottomWidth: 2.5,
    borderBottomEndRadius: 0.1,
    borderBottomColor: "black",
  },
  img: {
    width: 420,
    borderRadius: 35,
    height: 380,

  },
  imageContainer: {
    position: "absolute",
    top: 5
  },

  providertext: {

    padding: 15,
    paddingLeft: 85,
    fontWeight: 'bold',
    fontSize: 20

  },

  secondsection: {

    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 120

  },

  forgotpassword: {

    paddingRight: 80,
  },

  password: {

    fontWeight: 'bold'
  },

  usertext: {

    paddingLeft: 100,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20

  },

  providercontainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    width: 250

  },

  usercontainer: {

    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    width: 250,
    height: 55
  },

  loginIconsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 30,
  

  
  },


});
