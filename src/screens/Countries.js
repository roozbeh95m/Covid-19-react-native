import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Header from '../Components/Header'
import Loader from '../Components/Loader';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { getApi } from '../Functions/get';
import Styles from '../Styles/Styles';
import Card from '../Components/Card';

export default class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            Loading: true
        };
        this.arrayholder = [];
    }
    componentDidMount() {
        this.Static()
    }
    async Static() {
        let data = await getApi("https://corona.lmao.ninja/yesterday")
        this.setState({ data: data, Loading: "false" })
        this.arrayholder = this.state.data;
    }
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.country.toUpperCase()}`
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };

    renderHeader = () => {
        return (

            <TextInput
                style={{ backgroundColor: "white", textAlign: "center" }}
                placeholder="Type Here..."
                onChangeText={text => this.searchFilterFunction(text)}
                value={this.state.value}
            />


        );
    };
  
    render() {
        return (
            <View style={Styles.container}>
                <Header title={"Countries"} >
                    <TextInput
                        style={{ backgroundColor: "white", textAlign: "center", margin: 20, borderRadius: 10 ,height:40}}
                        placeholder="search..."
                        onChangeText={text => this.searchFilterFunction(text)}
                        value={this.state.value}
                    />
                </Header>
                {this.state.Loading === true
                    ?
                    <Loader />
                    :
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                        <FlatList
                            removeClippedSubviews={true}
                            initialNumToRender={5}
                            maxToRenderPerBatch={10}
                            windowSize={10}
                            style={{ backgroundColor: "white" }}
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <Card>
                                    <Image source={{ uri: item.countryInfo.flag }} style={{ width: 50, height: 50, resizeMode: "contain" }} />
                                    <Text style={[Styles.cardText,{width:100}]}>{item.country}</Text>
                                    <View>
                                        <Text style={[Styles.cardText, { color: "orange" }]}>total Cases:{item.cases}</Text>
                                        <Text style={Styles.cardText}>today Cases:{item.todayCases}</Text>
                                        <Text style={[Styles.cardText, { color: "red" }]}>deaths:{item.deaths}</Text>
                                        <Text style={[Styles.cardText]}>today Deaths:{item.todayDeaths}</Text>
                                        <Text style={[Styles.cardText, { color: "green" }]}>recovered:{item.recovered}</Text>
                                    </View>
                                    <View>
                                    </View>
                                </Card>
                            )}
                            keyExtractor={item => item.countryInfo.id}
                        />
                    </View>
                }
            </View>
        )
    }
}
