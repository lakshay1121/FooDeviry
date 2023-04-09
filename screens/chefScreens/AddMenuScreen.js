import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Form, FormItem, Picker } from "react-native-form-component";
import { SelectList } from "react-native-dropdown-select-list";

const AddMenuScreen = ({ navigation }) => {
  const days = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ];

  const food = [
    { label: "Breakfast", value: "Breakfast" },
    { label: "Lunch", value: "Lunch" },
    { label: "Dinner", value: "Dinner" },
  ];

  const [day, setSelectDay] = useState("");
  const [foodTime, setFoodTime] = useState("");
  const [number, setNumber] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        {/* <SelectList
          boxStyles={styles.selectDayContainer}
          inputStyles={styles.selectDayText}
          data={days}
          setSelected={(val) => {
            setSelectDay(val);
          }}
          dropdownStyles={styles.selectDayContainer}
          dropdownItemStyles={styles.selectDayText}
          defaultOption={days[1]}
        /> */}
        <View style={styles.bannerContainer}>
          <Image
            source={require("../../images/chefScreenBanner.png")}
            resizeMode="contain"
            style={styles.banner}
          />
        </View>

        <Text style={styles.MenuTableText}>Add Your Menu</Text>

        {/* <SelectList
          boxStyles={styles.selectDayContainer}
          inputStyles={styles.selectDayText}
          data={food}
          setSelected={(val) => {
            setFoodTime(val);
          }}
          dropdownStyles={styles.selectDayContainer}
          dropdownItemStyles={styles.selectDayText}
          defaultOption={food[1]}
        /> */}
      </View>

      <ScrollView style={styles.scrollviewContainer}>
        <Form
          buttonText="Add Items"
          buttonStyle={styles.submitButtonStyle}
          onButtonPress={() => {
            navigation.navigate("ShowMenu");
          }}
        >
          <FormItem
            label="Item to be added"
            placeholder="Item Name"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />

          <Picker
            items={days}
            label="Select a Day"
            selectedValue={day}
            onSelection={(item) => setSelectDay(item.value)}
            labelStyle={{ marginLeft: 30 }}
            buttonStyle={styles.picker}
            selectedValueStyle={{ marginLeft: 30, color: "black" }}
          />

          <Picker
            items={food}
            label="Meal Time"
            selectedValue={foodTime}
            onSelection={(item) => setFoodTime(item.value)}
            labelStyle={{ marginLeft: 30 }}
            buttonStyle={styles.picker}
            selectedValueStyle={{ marginLeft: 30, color: "black" }}
          />

          
          <FormItem
            label="Description"
            placeholder="Description"
            textInputStyle={{ marginLeft: 20 }}
            style={{
              width: "90%",
              marginLeft: 15,
              height: 80,
              backgroundColor: "#F0F0F0",
              borderRadius: 25,
            }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            placeholder="Add - ons"
            label="Add-ons"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            label="Capacity"
            placeholder="Item Capacity"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            label="Amount"
            placeholder="Amount to be charged"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
        </Form>
      </ScrollView>

      <View style={styles.bottomIcons}>
        <TouchableOpacity style={{ marginRight: 60 }}>
          <Image
            source={require("../../images/chefScreenIcons/homeIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 60 }}>
          <Image
            source={require("../../images/chefScreenIcons/addIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 60 }}>
          <Image
            source={require("../../images/chefScreenIcons/cardIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../images/chefScreenIcons/listIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMenuScreen;

const styles = StyleSheet.create({
  banner: {
    width: 375,
    height: 270,
    borderRadius: 25,
    marginBottom: 20,
    marginTop: 0,
  },

  bottomIcons: {
    display: "flex",
    flexDirection: "row",
  },

  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  formItems: {
    width: "90%",
    marginLeft: 15,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
  },

  firstContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  MenuTableText: {
    fontSize: 30,
    padding: 20,
    paddingBottom:30,
    fontWeight: "700",
  },
  picker: {
    width: "90%",
    marginLeft: 15,

    backgroundColor: "#F0F0F0",
    borderRadius: 25,
  },
  scrollviewContainer: {
    paddingTop: 15,
    width: "99%",
    height: 200,
  },
  submitButtonStyle: {
    backgroundColor: "tomato",
    width: "50%",
    borderRadius: 25,
    marginLeft: 90,
    marginBottom: 20,
  },

  selectDayContainer: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
  },
});