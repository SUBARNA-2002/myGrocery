import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RouteStack from './src/navigation/RouteStack'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
    <NavigationContainer>
     <RouteStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})