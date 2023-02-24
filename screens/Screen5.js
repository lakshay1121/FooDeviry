import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { SelectList } from "react-native-dropdown-select-list";
  import { useState } from "react";
  const data = [
  
    {key:'1', value:'Gurugram'},
    {key:'2', value:'Farukhnagar'},
    {key:'3', value:'Sector 105 , gurugram'},
    {key:'4', value:'Najafgarh , Delhi'},
    {key:'5', value:'Chauam Road Crossing'},
    
    
  ]
  
  const Screen5 = ({ navigation }) => {
  
  
    const [selected, setSelected] = useState('');
    
    return (
      <View style={styles.container}>
  
          <ImageBackground source={require('../images/googlemaptemplate.png')} style={styles.backgroundimg}>
        <View style={styles.selectLocationMainContainer}>
        
          <SelectList 
          boxStyles={styles.selectLocationContainer}
           inputStyles={styles.selectLocationText}
            data={data}
             setSelected={(val)=>{setSelected(val)}}
             dropdownStyles={styles.selectLocationContainer}
             dropdownItemStyles={styles.selectLocationText}
             placeholder="Select Your Location"
             defaultOption={data[2]}
             
             />
           
        </View>
  
        <View style={styles.contentContainer}>
          <View style={styles.titleContentContainer}>
            <Text style={styles.welcomText}>Satya Nilayam</Text>
          </View>
  
          <View style={styles.slangContainer}>
            <Text style={styles.slang}>21-42-34 , Banjara hills,</Text>
            <Text style={styles.slang}>Hyderabad , 500072</Text>
          </View>
  
          <View>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  navigation.navigate("AddMenuScreen");
                }}
              >
                Confirm Location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  
        </ImageBackground>
      </View>
    );
  };
  
  export default Screen5;
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#471E1E",
      padding: 10,
      borderRadius: 10,
      borderRadius: 25,
    },
  
    buttonText: {
      color: "white",
      fontSize: 15,
      fontWeight: "600",
      paddingLeft: 20,
      paddingRight: 20,
    },
  
    banner: {
      width: 10,
      height: 100,
    },
  
    bannerImage: {
      width: 300,
    },
  
    backgroundimg: {
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    contentContainer: {
      backgroundColor: "#fae2e1",
      width: 300,
      height: 200,
      borderRadius: 25,
      marginBottom: 32,
      justifyContent: "center",
      alignItems: "center",
  
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 9,
      },
  
      shadowOpacity: 0.7,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
  
    selectLocationMainContainer: {
      padding: 50,
      display: "flex",
      flexDirection:'row',
      alignItems:"flex-start"
    },
  
    selectLocationContainer: {
  
      backgroundColor: "white",
      borderRadius: 20,
      width:"90%",
      
  
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 9,
      },
  
      shadowOpacity: 0.7,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
  
    selectLocationText: {
      paddingLeft:20,
      fontWeight: "700",
    },
  
    selectLocationBackButton: {
     
    },
  
    slangContainer: {
      marginBottom: 8,
      alignItems: "center",
    },
    slang: {
      fontWeight: "bolder",
      color: "#811C06",
      fontSize: 14,
      lineHeight: 18.5,
    },
  
    titleText: {
      fontSize: 22,
      fontWeight: "600",
      lineHeight: 34.5,
    },
  
    titleContentContainer: {
      marginBottom: 8,
    },
    welcomText: {
      fontSize: 22,
      fontWeight: "600",
      lineHeight: 34.5,
    },
  });
  