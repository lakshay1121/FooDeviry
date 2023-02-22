import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const data = [
  { key: "1", value: "Monday" },
  { key: "2", value: "Tuesday" },
  { key: "3", value: "Wednesday" },
  { key: "4", value: "Thursday" },
  { key: "5", value: "Friday" },
  { key: "6", value: "Saturday" },
  { key: "6", value: "Sunday" },
];

const MenuForm = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.DaywiseMenuTableContainer}>
        <Text style={styles.menuText}>Menu Table For</Text>
      </View>

      <View style={styles.dropdownMainContainer}>
        <SelectList
          data={data}
          setSelected={(val) => setSelected(val)}
          defaultOption={data[0]}
          dropdownStyles={styles.dropdownContainer}
          boxStyles={styles.defaultOptionContainer}
          maxHeight="70"
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput placeholder="add your dish name" style={styles.textInput} />
        <TextInput placeholder="Description" style={styles.textInput} />
        <TextInput placeholder="Add ons Available" style={styles.textInput} />
        <TextInput placeholder="Item capacity" style={styles.textInput} />
        <TextInput placeholder="Amount" style={styles.textInput} />

        <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('AddMenuScreen')}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomOptionsContainer}>
        <TouchableOpacity
          style={styles.bottomIconsContainer}
          onPress={() => {
            navigation.navigate("AddMenuScreen");
          }}
        >
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
  );
};

export default MenuForm;

const styles = StyleSheet.create({
  bottomOptionsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    marginTop: 30,
  },

  bottomIconsContainer: {
    margin: 23,
  },
  bottomOptionsIcons: {
    width: 42,
    height: 42,
  },

  buttonContainer: {
    backgroundColor:"#E88C8C",
    padding: 12,
    marginRight: 30,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:30,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    paddingLeft: 17,
    paddingRight: 17,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  DaywiseMenuTableContainer: {
    // backgroundColor: "#E88C8C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
    borderRadius: 18,
    height:80 ,
    marginTop:50,

     shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.7,
    shadowRadius: 12.35,

    elevation: 4,
  },
  dropdownContainer: {
    width: 200,
    borderRadius: 20,
    height:60
  },
  defaultOptionContainer: {
    width: 200,
    borderRadius: 20,
  },

  dropdownMainContainer: {
    height: 190,
    padding:30,
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
    
    
  },
  menuText: {
    fontSize: 24,
    paddingLeft: 40,
    paddingRight: 40,
    color:'black'
  },

  textInput: {
    height: 40,
    margin: 9,
    borderWidth: 0,
    width: 300,
    borderRadius: 10,
    backgroundColor: "lightgrey",
    paddingLeft: 25,
  },
});
