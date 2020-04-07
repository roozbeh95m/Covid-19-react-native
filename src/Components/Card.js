import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from '../Styles/Styles'

export default class Card extends Component {
    render() {
        return (
            <View style={Styles.card}>
                {this.props.children}
            </View>
        )
    }
}
