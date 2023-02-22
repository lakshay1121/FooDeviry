import {ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AddMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wholeContentContainer}>
        <View style={styles.topContainer}>
          <View style={styles.rasoiContainer}>
            <TouchableOpacity style={styles.rasoiNameContainer}>
              <Text style={styles.rasoiNameText}>Kajaria rasoi</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require("../../images/chefScreenIcons/chefProfile.png")}
                style={styles.chefProfileImg}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingLeft: 20,
            }}
          >
            <TouchableOpacity style={styles.chefNameContainer}>
              <Text style={styles.chefNameText}>Lakshay</Text>
            </TouchableOpacity>

            <View style={styles.chefDetailsContainer}>
              <Text style={styles.text}>chef Id : 579</Text>
              <Text style={styles.text}>User Rating : 4.5</Text>
              <Text style={styles.text}>Average Handouts : 10</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuTableContainer}>
          <Text style={styles.menuTableText}>Menu Table</Text>

          <View style={styles.addItemsContainer}>
            <TouchableOpacity style={styles.addMenuButton} onPress={()=>{navigation.navigate("MenuForm")}}>
              <Text style={{ fontSize: 18 }}>Add Item 1</Text>
              <TouchableOpacity  onPress={()=>{navigation.navigate("MenuForm")}}>
                <Image
                  source={require("../../images/chefScreenIcons/plusIcon.png")}
                  style={styles.plusIconImg}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addMenuButton}>
              <Text style={{ fontSize: 18 }}>Add Item 2</Text>
              <TouchableOpacity>
                <Image
                  source={require("../../images/chefScreenIcons/plusIcon.png")}
                  style={styles.plusIconImg}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addMenuButton}>
              <Text style={{ fontSize: 18 }}>Add Item 3</Text>
              <TouchableOpacity>
                <Image
                  source={require("../../images/chefScreenIcons/plusIcon.png")}
                  style={styles.plusIconImg}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addMenuButton}>
              <Text style={{ fontSize: 18 }}>Add Item 3</Text>
              <TouchableOpacity>
                <Image
                  source={require("../../images/chefScreenIcons/plusIcon.png")}
                  style={styles.plusIconImg}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomOptionsContainer}>
          <TouchableOpacity style={styles.bottomIconsContainer} onPress={()=>{navigation.navigate('AddMenuScreen')}}>
            <Image
              source={require("../../images/chefScreenIcons/homeIcon.png")}
              style={styles.bottomOptionsIcons}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIconsContainer}>
            <Image
              source={require("../../images/chefScreenIcons/addIcon.png")}
              style={styles.bottomOptionsIcons}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIconsContainer}>
            <Image
              source={require("../../images/chefScreenIcons/cardIcon.png")}
              style={styles.bottomOptionsIcons}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomIconsContainer}>
            <Image
              source={require("../../images/chefScreenIcons/listIcon.png")}
              style={styles.bottomOptionsIcons}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddMenuScreen;

const styles = StyleSheet.create({
  addMenuButton: {
    width: 250,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 7,
    margin: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addItemsToMenuText: {
    fontSize: 20,
    marginBottom: 100,
  },
  bottomOptionsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    
  },

  bottomIconsContainer: {
    margin: 23,
  },
  bottomOptionsIcons: {
    width: 42,
    height: 42,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  chefProfileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  chefNameContainer: {
    backgroundColor: "white",
    width: 100,
    height: 40,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chefDetailsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  menuTableContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  menuTableText: {
    fontSize: 28,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  plusIconImg: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
  },

  rasoiContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 60,
  },
  rasoiNameContainer: {
    backgroundColor: "#A98B8B",
    height: 40,
    width: 220,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 40,
  },
  rasoiNameText: {
    fontSize: 20,
    color: "white",
  },

  topContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },

  text: {
    fontSize: 12,
    margin: 4,
    color: "black",
  },
});
