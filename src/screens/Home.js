import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from '../Components/Header'
import { getApi } from '../Functions/get'
import Card from '../Components/Card';
import Styles from '../Styles/Styles';
import Loader from '../Components/Loader';
var moment = require("moment")
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }
    componentDidMount() {
        this.Static()
    }
    async Static() {
        let data = await getApi("https://corona.lmao.ninja/all")
        this.setState({ data: data })
    }
    render() {
        return (
            <View style={Styles.container}>
                <Header title={"covid-19"} />
                {this.state.data == ""
                    ?
                    <Loader />
                    :
                    <View>
                        <Text style={[Styles.cardText, { 
                            padding: 15 ,color:"lightgray",fontSize:20}]}>{moment(this.state.data.updated).format('MMMM Do YYYY')}</Text>
                        <Card>
                            <Text style={Styles.cardText}>Coronavirus Cases:</Text>
                            <Text style={Styles.cardText}>{this.state.data.cases}</Text>
                        </Card>
                        <Card>
                            <Text style={Styles.cardText}>Coronavirus today Cases:</Text>
                            <Text style={Styles.cardText}>{this.state.data.todayCases}</Text>
                        </Card>
                        <Card>
                            <Text style={Styles.cardText}>Coronavirus deaths:</Text>
                            <Text style={Styles.cardText}>{this.state.data.deaths}</Text>

                        </Card>
                        <Card>
                            <Text style={Styles.cardText}>Coronavirus today Deaths:</Text>
                            <Text style={Styles.cardText}>{this.state.data.todayDeaths}</Text>
                        </Card>
                        <Card>
                            <Text style={Styles.cardText}>Coronavirus recovered:</Text>
                            <Text style={Styles.cardText}>{this.state.data.recovered}</Text>
                        </Card>
                    </View>
                }
            </View>
        )
    }
}
