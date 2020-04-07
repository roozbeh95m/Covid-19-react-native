import React, { Component } from 'react';
import { Stack, Scene, Router, Tabs } from 'react-native-router-flux';
import Countries from './src/screens/Countries';
import About     from './src/screens/About';
import Home      from './src/screens/Home';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Tabs
            hideNavBar
            key="mediaContainerTabs"
            swipeEnabled
            showLabel={true}
            activeTintColor={"white"}
            labelStyle={{fontSize:14,fontWeight:"bold"}}
            tabBarStyle={{backgroundColor:"rgba(41,47,77,1)",justifyContent:"center",alignItems:"center"}}
            tabBarPosition='bottom'
          >
            <Scene key="home"       component={Home}      hideNavBar  title={"Covid-19"}/>
            <Scene key="countries"  component={Countries} hideNavBar  title={"Countries"}/>
            <Scene key="about"      component={About}     hideNavBar  title={"About"}/>
          </Tabs>
        </Stack>
      </Router>
    )
  }
}
