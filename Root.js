import React from "react";
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
// import LoginScreen from "./screen/Login";
import {connect} from 'react-redux';
import AccountScreen from "./screen/Account";
import IntroScreen from "./screen/Intro";
import CharacterSettings from "./screen/CharacterSettings";
import Settings from "./screen/Settings";
import About from "./screen/About";

const Root = createStackNavigator(
    {

        Account: {
            screen: AccountScreen,
            navigationOptions: {
                title: 'TaskRPG',
            }
        },
        CharacterSettings: {
            screen: CharacterSettings
        },
        Intro: {
            screen: IntroScreen
        },
        Settings: {
            screen: Settings
        },
        About: {
            screen: About
        },
    },
    {
        mode: 'modal',
        // initialRouteName: "Account",
        headerMode: 'none'
    }
);


export default createAppContainer(Root);


