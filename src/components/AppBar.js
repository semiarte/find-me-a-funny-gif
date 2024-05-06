import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'

export const AppBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Find me a gif</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9b59b6',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 15
    },
    text: {
        color: '#ecf0f1',
        paddingHorizontal: 10,
    }
})