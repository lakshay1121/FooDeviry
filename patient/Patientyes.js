import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Patientyes = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22,fontWeight:'600'}}>Congratulations , You got a discount of 40%</Text>
    </View>
  )
}

export default Patientyes

const styles = StyleSheet.create({
    container:{

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1

    }
})