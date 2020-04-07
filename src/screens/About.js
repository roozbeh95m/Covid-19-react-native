import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Header from '../Components/Header'
import Loader from '../Components/Loader'
import Styles from '../Styles/Styles'
import Card from '../Components/Card'

export default class About extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Header title={"About"} />
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Card>
                        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                            <Image source={require("./../Virus.jpg")} style={{ width: 200, height: 200, resizeMode: "contain" }} />
                            <Text style={[Styles.cardText, { textAlign: "center", padding: 5 }]}>
                                Based On NOVELCovid/API 2.0.0
                        </Text>
                            <Text style={[Styles.cardText, { textAlign: "center", padding: 5 }]}>
                                Roozbeh Mohammadzadeh
                        </Text>
                            <Text style={[Styles.cardText, { textAlign: "center", padding: 5 }]}>
                                Made By ☕️ & ❤️ in Yazd, Iran
                        </Text>
                        </View>
                    </Card>
                </View>
            </View>
        )
    }
}
