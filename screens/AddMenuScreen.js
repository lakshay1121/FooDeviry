import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Form, FormItem } from "react-native-form-component";
import { SelectList } from "react-native-dropdown-select-list";

const AddMenuScreen = ({ navigation }) => {
  const days = [
    { key: "1", value: "Monday" },
    { key: "2", value: "Tuesday" },
    { key: "3", value: "Wednesday" },
    { key: "4", value: "Thursday" },
    { key: "5", value: "Friday" },
    { key: "5", value: "Saturday" },
    { key: "5", value: "Sunday" },
  ];

  const food = [
    { key: "1", value: "Breakfast" },
    { key: "2", value: "Lunch" },
    { key: "3", value: "Dinner" },
  ];

  const [day, setSelectDay] = useState(null);
  const [foodTime, setFoodTime] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.MenuTableText}>Menu Table for</Text>

        <SelectList
          boxStyles={styles.selectDayContainer}
          inputStyles={styles.selectDayText}
          data={days}
          setSelected={(val) => {
            setSelectDay(val);
          }}
          dropdownStyles={styles.selectDayContainer}
          dropdownItemStyles={styles.selectDayText}
          defaultOption={days[1]}
        />

        <Image
          source={require("../images/chefScreen1banner.png")}
          style={styles.banner}
        />

        <SelectList
          boxStyles={styles.selectDayContainer}
          inputStyles={styles.selectDayText}
          data={food}
          setSelected={(val) => {
            setFoodTime(val);
          }}
          dropdownStyles={styles.selectDayContainer}
          dropdownItemStyles={styles.selectDayText}
          defaultOption={food[1]}
        />
      </View>

      <ScrollView style={styles.scrollviewContainer}>
        <Form buttonText="Add Items"
          buttonStyle={styles.submitButtonStyle}
          onButtonPress={() => {
            navigation.navigate("ShowMenu");
          }}
        >
          <FormItem
            label="Item to be added"
            placeholder="Item Name"
            isRequired
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            label="Description"
            placeholder="Description"
            isRequired
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
            isRequired
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            label="Amount"
            placeholder="Amount to be charged"
            isRequired
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
        </Form>
      </ScrollView>

      <View style={styles.bottomIcons}>
        <TouchableOpacity style={{ marginRight: 45 }}>
          <Image
            source={require("../images/chefScreenIcons/homeIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 45 }}>
          <Image
            source={require("../images/chefScreenIcons/addIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 45 }}>
          <Image
            source={require("../images/chefScreenIcons/cardIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../images/chefScreenIcons/listIcon.png")}
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
    borderRadius: 100,
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
    marginBottom: 20
  },

  selectDayContainer: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
  },
});
