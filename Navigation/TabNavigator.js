import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import TellScreen from '../Screens/Tell'
import TrendScreen from '../Screens/Trend'

const Tab = createMaterialBottomTabNavigator()

export default class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name= "TellScreen" component={TellScreen} />
                <Tab.Screen name= "TrendScreen" component={TrendScreen} />

            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
