import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from '../patientDatabase/patientData.json'

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>

      
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({

    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})