import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Text style={[styles.signUp, styles.signUpLayout, styles.loginTypo]}>
        Sign up
      </Text>
      <ImageBackground
        style={styles.androidLarge3Child}
        resizeMode="cover"
        source={require("../images/desithali.png")}
      />
      <View style={[styles.androidLarge3Item, styles.androidLayout]} />
      <View style={[styles.androidLarge3Inner, styles.androidLayout]} />
      
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("chefscree1")} >
        
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../images/Rectangle4.png")}
        />
        
      </Pressable>
     

      
      <Text style={[styles.provider, styles.userTypo]}>provider</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("")}
      >
        
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../images/Rectangle4.png")}
        />
        
      </Pressable>
      <Text style={[styles.user, styles.userTypo]}>user</Text>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={styles.groupLayout}
          resizeMode="cover"
          source={require("../images/Rectangle4.png")}
        />
        <Image
          style={styles.facebookLogoIcon}
          resizeMode="cover"
          source={require("../images/Facebook.png")}
        />
        <Text style={[styles.logInWith, styles.logInWithTypo]}>
          Log In with Facebook
        </Text>
      </View>
      <Pressable
        style={[styles.vectorParent, styles.parentLayout]}
        onPress={() => navigation.navigate("IPhoneSE5")}
      >
        <Image
          style={styles.groupLayout}
          resizeMode="cover"
          source={require("../images/Rectangle4.png")}
        />
        
        <Image
          style={[styles.googleLogoIcon, styles.signUpLayout]}
          resizeMode="cover"
          source={require("../images/Google.png")}
        />
        <Text style={[styles.logInWith1, styles.orLayout]}>
          Log In with Google
        </Text>
      </Pressable>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("Screen4")}
      >
        <Text style={[styles.forgotPassword1, styles.logInWithTypo]}>
          Forgot password?
        </Text>
      </Pressable>
      <Text style={[styles.or, styles.orLayout]}> or</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    top: 420,
    color: Color.black,
    fontWeight: "700",
  },
  signUpLayout: {
    height: 30,
    position: "absolute",
  },
  androidLayout: {
    height: 1,
    width: 55,
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    top: 463,
    position: "absolute",
  },
  userTypo: {
    fontFamily: FontFamily.inriaSansRegular,
    fontSize: FontSize.size_10xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  parentLayout: {
    height: 43,
    width: 293,
    left: 33,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_lg,
    height: 43,
    width: 293,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logInWithTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  orLayout: {
    height: 40,
    textAlign: "left",
    position: "absolute",
  },
  login: {
    fontSize: FontSize.size_9xl,
    width: 73,
    height: 30,
    left: 64,
    position: "absolute",
  },
  signUp: {
    left: 233,
    fontSize: 21,
    width: 118,
  },
  androidLarge3Child: {
    width: 412,
    height: 400,
    left: 0,
    top: 0,
   
  },
  androidLarge3Item: {
    left: 64,
  },
  androidLarge3Inner: {
    left: 238,
  },
  rectanglePressable: {
    top: 488,
    left: 47,
    backgroundColor: Color.snow_100,
    width: 259,
    height: 51,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  provider: {
    top: 494,
    left: 134,
    width: 172,
    height: 39,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_sm,
    width: "100%",
  },
  wrapper: {
    left: 50,
    top: 562,
    width: 256,
    height: 52,
    position: "absolute",
  },
  user: {
    top: 573,
    left: 151,
    width: 163,
    height: 32,
  },
  groupChild: {
    backgroundColor: Color.royalblue,
  },
  facebookLogoIcon: {
    top: 13,
    left: 24,
    width: 2,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  logInWith: {
    top: 10,
    left: 69,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    width: 192,
    height: 22,
    position: "absolute",
  },
  rectangleParent: {
    top: 675,
  },
  googleLogoIcon: {
    left: 24,
    width: 23,
    top: 13,
  },
  logInWith1: {
    left: 68,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_600,
    width: 180,
    top: 16,
  },
  vectorParent: {
    top: 734,
  },
  forgotPassword1: {
    fontSize: FontSize.size_2xl,
    color: Color.gray_400,
    width: 176,
    height: 30,
  },
  forgotPassword: {
    left: 196,
    top: 636,
    position: "absolute",
  },
  or: {
    top: 539,
    left: 162,
    fontSize: FontSize.size_4xl,
    fontStyle: "italic",
    fontFamily: FontFamily.inriaSansBoldItalic,
    width: 72,
    color: Color.black,
    fontWeight: "700",
    height: 17,
  },
  androidLarge3: {
    backgroundColor:"#DECACA",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen2;
