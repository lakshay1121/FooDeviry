import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const chefscree1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge5}>
      <View style={[styles.androidLarge5Child, styles.androidChildBg]} />
      <Text
        style={[
          styles.since3122004,
          styles.chefIdFlexBox,
          styles.menuTableClr,
          styles.chefIdTypo,
        ]}
      >
        since - 3/12/2004
      </Text>
      <Image
        style={styles.androidLarge5Item}
        resizeMode="cover"
        source={require("../../cheficons/Rectangle1082.png")}
      />
       <Image
        style={styles.androidLarge5Item}
        resizeMode="cover"
        source={require("../../cheficons/Rectangle1083.png")}
      />
      <View style={styles.androidLarge5Inner} />
      <Image
        style={styles.iconsaxbulkwanchain}
        resizeMode="cover"
        source={require("../../cheficons/wanchain.png")}
      />
      <Text style={[styles.kajariaRasoi, styles.chefIdFlexBox]}>
        Kajaria rasoi
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../cheficons/Ellipse13.png")}
      />
      <Text style={[styles.chefId, styles.chefIdFlexBox, styles.chefIdTypo]}>
        Chef id : 576
      </Text>
      <Text style={[styles.lakshayKumar, styles.addItemsTypo]}>
        Lakshay kumar
      </Text>
      <Text style={[styles.userRatings, styles.userRatingsTypo]}>
        User ratings : 3
      </Text>
      <Text style={[styles.averageHandouts, styles.userRatingsTypo]}>
        Average handouts : 10
      </Text>
      <Text
        style={[styles.menuTable, styles.chefIdFlexBox, styles.menuTableClr]}
      >
        Menu Table
      </Text>
    
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhoneSE13")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../cheficons/Rectangle1086.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../../cheficons/Vector.png")}
      />
      <Text style={[styles.addItems, styles.addItemsTypo]}>Add items</Text>
      <Text style={[styles.tipMost, styles.chefIdFlexBox]}>
        Tip : Most users added panner to their menu table
      </Text>
      <Image
        style={styles.iconsaxbulkwarning2}
        resizeMode="cover"
        source={require("../../cheficons/warning2.png")}
      />
      {/* <View style={[styles.rectangleView, styles.androidChildBg]} /> */}
      
      <View style={[styles.androidLarge5Child1, styles.androidChildBg]} />
      <Pressable
        style={styles.iconsaxlinearhome}
        onPress={() => navigation.navigate("IPhoneSE2")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../cheficons/home.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../../cheficons/search.png")}
      />
      <Image
        style={styles.iconsaxlinearcardpos}
        resizeMode="cover"
        source={require("../../cheficons/cardpos.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../../cheficons/profile.png")}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  androidChildBg: {
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  chefIdFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  menuTableClr: {
    color: Color.black,
    textAlign: "left",
  },
  chefIdTypo: {
    fontFamily: FontFamily.zenDotsRegular,
    fontSize: FontSize.size_2xl,
  },
  addItemsTypo: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  userRatingsTypo: {
    color: Color.darkgray_300,
    textAlign: "left",
    fontFamily: FontFamily.zenDotsRegular,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  iconLayout: {

    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge5Child: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 420,
    height: 318,
  },
  since3122004: {
    top: 227,
    left: 276,
    width: 95,
    height: 55,
  },
  androidLarge5Item: {
    top: 123,
    left: 67,
    borderRadius: Border.br_xl,
    width: 265,
    height: 60,
    position: "absolute",
  },
  androidLarge5Inner: {
    top: 32,
    left: 23,
    borderRadius: Border.br_lg,
    backgroundColor: Color.rosybrown_200,
    width: 274,
    height: 54,
    position: "absolute",
  },
  iconsaxbulkwanchain: {
    top: 47,
    left: 62,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  kajariaRasoi: {
    top: 43,
    left: 105,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.alegreyaSansRegular,
    color: Color.white,
    width: 137,
    height: 30,
  },
  ellipseIcon: {
    top: 27,
    left: 323,
    width: 60,
    height: 52,
    position: "absolute",
  },
  chefId: {
    top: 223,
    left: 76,
    color: Color.gray_300,
    width: 145,
    height: 16,
  },
  lakshayKumar: {
    top: 135,
    left: 129,
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.barlowSemibold,
    width: 184,
    height: 35,
  },
  userRatings: {
    top: 243,
    left: 70,
  },
  averageHandouts: {
    top: 268,
    left: 51,
  },
  menuTable: {
    top: 358,
    left: 119,
    fontSize: FontSize.size_12xl,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    width: 246,
    height: 40,
  },
  icon: {
    borderRadius: Border.br_sm,
  },
  wrapper: {
    left: 165,
    top: 479,
    width: 80,
    height: 74,
    position: "absolute",
  },
  vectorIcon: {
    height: "5.19%",
    width: "12.59%",
    top: "55.91%",
    right: "44.01%",
    bottom: "32.91%",
    left: "43.4%",
  },
  addItems: {
    top: 570,
    left: 162,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.nunitoSemibold,
    width: 160,
    height: 52,
  },
  tipMost: {
    top: 623,
    left: 96,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.barlowMedium,
    color: Color.dimgray_300,
    width: 278,
    height: 36,
  },
  iconsaxbulkwarning2: {
    top: 622,
    width: 17,
    height: 17,
    left: 70,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 728,
    left: 0,
    width: 360,
    height: 72,
  },
  androidLarge5Child1: {
    bottom:0,
    left: 2,
    width: 406,
    height: 76,
  },
  icon1: {
    bottom:0,
  },
  iconsaxlinearhome: {
    left: 30,
    bottom: 20,
    width: 42,
    height: 44,
    position: "absolute",
  },
  vectorIcon1: {
    height: "4.69%",
    width: "10.29%",
    top: "92.81%",
    right: "54.85%",
    bottom: "2.51%",
    left: "34.86%",
  },
  iconsaxlinearcardpos: {
    bottom:20,
    left: 252,
    width: 48,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "3.31%",
    width: "10.36%",
    top: "94.03%",
    right: "4.35%",
    bottom: "2.66%",
    left: "85.29%",
  },
  lineIcon: {
    top: 413,
    left: 113,
    width: 175,
    height: 2,
    position: "absolute",
  },
  androidLarge5: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default chefscree1;
