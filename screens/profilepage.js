import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Padding,
  FontFamily,
  Color,
  FontSize,
  Border,
} from "../GlobalStyles";

const MenuDefaultLight = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menuDefaultLight, styles.iconLayout1]}>
      <View
        style={[
          styles.cardlightaccountaccountQui,
          styles.wrapperFlexBox,
          styles.wrapperSpaceBlock,
          styles.headerlightheader1RowPosition,
        ]}
      >
        <View style={styles.accountInfoWrapper}>
          <Image
            style={styles.elementlightaccountavatarIcon}
            resizeMode="cover"
            source={require("../assets/elementlightaccountavatar.png")}
          />
          <View style={styles.ml18}>
            <Text style={styles.genevieveLana}>Genevieve Lana</Text>
            <Text
              style={[styles.editProfile, styles.mt4, styles.menuTitleTypo]}
            >
              Edit profile
            </Text>
          </View>
        </View>
        <View style={styles.navigatelighticonButton}>
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
      <View style={styles.sectionmenumenuItemList}>
        <View style={styles.cardlightaccountmenuItem}>
          <View style={styles.elementlightdivider}>
            <View style={styles.divider} />
          </View>
          <View
            style={[
              styles.menuItemWrapper,
              styles.mt8,
              styles.wrapperFlexBox,
              styles.wrapperSpaceBlock,
            ]}
          >
            <View style={styles.accountInfoWrapper}>
              <Image
                style={styles.iconoutlinelovely}
                resizeMode="cover"
                source={require("../assets/iconoutlinelovely.png")}
              />
              <Text
                style={[styles.menuTitle, styles.ml16, styles.menuTitleTypo]}
              >
                Your Favorites
              </Text>
            </View>
            <View style={styles.navigatelighticonButton}>
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardlightaccountmenuItem1}>
          <View style={styles.elementlightdivider}>
            <View style={styles.divider} />
          </View>
          <View
            style={[
              styles.menuItemWrapper,
              styles.mt8,
              styles.wrapperFlexBox,
              styles.wrapperSpaceBlock,
            ]}
          >
            <View style={styles.accountInfoWrapper}>
              <Image
                style={styles.iconoutlinelovely}
                resizeMode="cover"
                source={require("../assets/iconoutlinemap.png")}
              />
              <Text
                style={[styles.menuTitle, styles.ml16, styles.menuTitleTypo]}
              >
                Address management
              </Text>
            </View>
            <View style={styles.navigatelighticonButton}>
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardlightaccountmenuItem1}>
          <View style={styles.elementlightdivider}>
            <View style={styles.divider} />
          </View>
          <View
            style={[
              styles.menuItemWrapper,
              styles.mt8,
              styles.wrapperFlexBox,
              styles.wrapperSpaceBlock,
            ]}
          >
            <View style={styles.accountInfoWrapper}>
              <Image
                style={styles.iconoutlinelovely}
                resizeMode="cover"
                source={require("../assets/iconoutlinewallet.png")}
              />
              <Text
                style={[styles.menuTitle, styles.ml16, styles.menuTitleTypo]}
              >
                Payment management
              </Text>
            </View>
            <View style={styles.navigatelighticonButton}>
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardlightaccountmenuItem1}>
          <View style={styles.elementlightdivider}>
            <View style={styles.divider} />
          </View>
          <View
            style={[
              styles.menuItemWrapper,
              styles.mt8,
              styles.wrapperFlexBox,
              styles.wrapperSpaceBlock,
            ]}
          >
            <View style={styles.accountInfoWrapper}>
              <Image
                style={styles.iconoutlinelovely}
                resizeMode="cover"
                source={require("../assets/iconoutlineticket.png")}
              />
              <Text
                style={[styles.menuTitle, styles.ml16, styles.menuTitleTypo]}
              >
                Your promotion
              </Text>
            </View>
            <View style={styles.navigatelighticonButton}>
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardlightaccountmenuItem1}>
          <View style={styles.elementlightdivider}>
            <View style={styles.divider} />
          </View>
          <View
            style={[
              styles.menuItemWrapper,
              styles.mt8,
              styles.wrapperFlexBox,
              styles.wrapperSpaceBlock,
            ]}
          >
            <View style={styles.accountInfoWrapper}>
              <Image
                style={styles.iconoutlinelovely}
                resizeMode="cover"
                source={require("../assets/iconoutlinereceiptminus.png")}
              />
              <Text
                style={[styles.menuTitle, styles.ml16, styles.menuTitleTypo]}
              >
                Order history
              </Text>
            </View>
            <View style={styles.navigatelighticonButton}>
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.cardlightaccountmenuItem1}>
          <View style={styles.elementlightdivider}>
            <View style={styles.divider} />
          </View>
          <View
            style={[
              styles.menuItemWrapper,
              styles.mt8,
              styles.wrapperFlexBox,
              styles.wrapperSpaceBlock,
            ]}
          >
            <View style={styles.accountInfoWrapper}>
              <Image
                style={styles.iconoutlinelovely}
                resizeMode="cover"
                source={require("../assets/iconoutlinemessagequestion.png")}
              />
              <Text
                style={[styles.menuTitle, styles.ml16, styles.menuTitleTypo]}
              >
                Support center
              </Text>
            </View>
            <View style={styles.navigatelighticonButton}>
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.elementlightdivider}>
          <View style={styles.divider} />
        </View>
      </View>
      <View
        style={[
          styles.headerlightheader1Row,
          styles.headerlightheader1RowPosition,
        ]}
      >
        <LinearGradient
          style={styles.statusBar}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0.01)", "rgba(255, 255, 255, 0)"]}
        >
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <View style={styles.time}>
              <Image
                style={styles.icon7}
                resizeMode="cover"
                source={require("../assets/941.png")}
              />
            </View>
            <View style={[styles.rightSide, styles.rightFlexBox]}>
              <Image
                style={styles.mobileSignalIcon}
                resizeMode="cover"
                source={require("../assets/mobile-signal.png")}
              />
              <Image
                style={[styles.wifiIcon, styles.ml5]}
                resizeMode="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={[styles.batteryIcon, styles.ml5]}
                resizeMode="cover"
                source={require("../assets/battery.png")}
              />
            </View>
          </View>
        </LinearGradient>
        <View
          style={[styles.headerWrapper, styles.mt10, styles.wrapperSpaceBlock]}
        >
          <View style={[styles.navigatelighttopBar, styles.wrapperFlexBox]}>
            <Pressable
              style={styles.navigatelighticonButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
            </Pressable>
            <Text style={styles.titleText}>Menu</Text>
            <View style={styles.rightFlexBox}>
              <View style={styles.navigatelighticonButton}>
                <Image
                  style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/icon7.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonlightprimaryButton}>
        <Text style={styles.buttonTypo}>Log out</Text>
      </View>
      <View style={styles.menuDefaultLightChild} />
      <Image
        style={styles.icon9}
        resizeMode="cover"
        source={require("../assets/icon8.png")}
      />
      <Image
        style={styles.iconsaxlinearhome}
        resizeMode="cover"
        source={require("../assets/iconsaxlinearhome.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.buttonText1, styles.buttonTypo]}>Log out</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_3xs,
  },
  ml18: {
    marginLeft: Margin.m_2xl,
  },
  ml16: {
    marginLeft: Margin.m_xl,
  },
  mt8: {
    marginTop: Margin.m_sm,
  },
  ml5: {
    marginLeft: Margin.m_2xs,
  },
  mt10: {
    marginTop: Margin.m_md,
  },
  iconLayout1: {
    width: "100%",
    flex: 1,
  },
  wrapperFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  headerlightheader1RowPosition: {
    left: 0,
    position: "absolute",
  },
  menuTitleTypo: {
    fontFamily: FontFamily.bodyRegular12,
    textAlign: "left",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rightFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  buttonTypo: {
    textAlign: "center",
    color: Color.primary011,
    fontSize: FontSize.buttonSemibold161_size,
    fontFamily: FontFamily.headlineSemiBold24,
    fontWeight: "600",
  },
  elementlightaccountavatarIcon: {
    borderRadius: Border.br_2xl,
    width: 55,
    maxHeight: "100%",
  },
  genevieveLana: {
    fontSize: FontSize.headlineSemiBold181_size,
    textAlign: "left",
    fontFamily: FontFamily.headlineSemiBold24,
    fontWeight: "600",
    color: Color.textLightBlack1,
  },
  editProfile: {
    fontSize: FontSize.bodyRegular12_size,
    lineHeight: 16,
    color: Color.neutralLight031,
  },
  accountInfoWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    alignSelf: "stretch",
  },
  navigatelighticonButton: {
    borderRadius: Border.br_sm,
    width: 36,
    height: 36,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  cardlightaccountaccountQui: {
    top: 158,
    width: 401,
    height: 122,
  },
  divider: {
    borderStyle: "solid",
    borderColor: "#f3f3f3",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  elementlightdivider: {
    alignSelf: "stretch",
  },
  iconoutlinelovely: {
    width: 18,
    height: 18,
  },
  menuTitle: {
    fontSize: FontSize.bodyRegular141_size,
    lineHeight: 20,
    color: Color.textLightBlack1,
    fontFamily: FontFamily.bodyRegular12,
  },
  menuItemWrapper: {
    alignSelf: "stretch",
  },
  cardlightaccountmenuItem: {
    height: 52,
    paddingBottom: Padding.p_3xs,
    width: 393,
  },
  cardlightaccountmenuItem1: {
    paddingBottom: Padding.p_3xs,
    alignSelf: "stretch",
  },
  sectionmenumenuItemList: {
    top: 280,
    left: 8,
    height: 403,
    width: 393,
    position: "absolute",
  },
  icon7: {
    width: 28,
    height: 11,
  },
  time: {
    borderRadius: Border.br_xl,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_4xs,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  batteryIcon: {
    width: 24,
    height: 11,
  },
  rightSide: {
    alignItems: "center",
  },
  wrapper: {
    display: "none",
    alignSelf: "stretch",
  },
  statusBar: {
    height: 43,
    paddingVertical: Padding.p_2xs,
    backgroundColor: "transparent",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xl,
    overflow: "hidden",
  },
  titleText: {
    fontSize: FontSize.buttonSemibold161_size,
    textAlign: "left",
    color: Color.textLightBlack1,
    fontFamily: FontFamily.headlineSemiBold24,
    fontWeight: "600",
  },
  navigatelighttopBar: {
    alignSelf: "stretch",
  },
  headerWrapper: {
    alignSelf: "stretch",
  },
  headerlightheader1Row: {
    top: 0,
    width: 411,
    height: 146,
    paddingBottom: Padding.p_lg,
    backgroundColor: Color.textLightWhite,
  },
  buttonlightprimaryButton: {
    bottom: 34,
    left: 43,
    borderRadius: Border.br_3xs,
    width: 327,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  menuDefaultLightChild: {
    top: 745,
    left: -5,
    backgroundColor: Color.gainsboro,
    width: 416,
    height: 69,
    position: "absolute",
  },
  icon9: {
    marginTop: 355,
    marginLeft: 139.5,
    top: "50%",
    left: "50%",
    width: 39,
    height: 32,
    position: "absolute",
  },
  iconsaxlinearhome: {
    top: 762,
    left: 25,
    width: 40,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.88%",
    width: "8.88%",
    top: "94.12%",
    right: "31.45%",
    bottom: "2%",
    left: "59.67%",
    position: "absolute",
  },
  vectorIcon1: {
    top: 763,
    left: 136,
    width: 31,
    height: 30,
    position: "absolute",
  },
  buttonText1: {
    top: "81.65%",
    left: "40.39%",
    position: "absolute",
  },
  menuDefaultLight: {
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.textLightWhite,
  },
});

export default MenuDefaultLight;
