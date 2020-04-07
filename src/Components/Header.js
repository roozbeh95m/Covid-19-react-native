import React, { Component } from 'react'
import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import Styles from '../Styles/Styles'

export default class Header extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor:"rgba(247,97,100,1)"}}>
                <StatusBar backgroundColor={"rgba(247,97,100,1)"} barStyle={"light-content"} />
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>{this.props.title}</Text>
                    {this.props.children}
                </View>
               
            </SafeAreaView>
        )
    }
}
