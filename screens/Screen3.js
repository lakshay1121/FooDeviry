import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text>This is screen 3</Text>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },

})
