import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './Navigation/TabNavigator'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})



