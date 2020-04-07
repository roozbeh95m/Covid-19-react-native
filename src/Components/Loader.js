import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import Styles from '../Styles/Styles'

export default class Loader extends Component {
    render() {
        return (
            <View style={Styles.loading}>
               <ActivityIndicator size="large" color="rgba(98,120,245,1)"/>
               <Text style={{color:"rgba(98,120,245,1)",padding:10,fontWeight:"bold"}}>Loading ... </Text>
            </View>
        )
    }
}
