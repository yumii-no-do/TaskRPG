import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import Quest from "./Quest";
import Boss from "./Boss";
import Settings from "./Settings";
import Character from "./Character";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const AppNavigator = createMaterialBottomTabNavigator(
    {
        Quest: {
            screen: Quest,
            navigationOptions: {
                title: 'Квесты',
                tabBarIcon: ({tintColor}) => (<Icon name="sword" color={tintColor} size={24}/>)
            }
        },
        Boss: {
            screen: Boss,
            navigationOptions: {
                title: 'Боссы',
                tabBarIcon: ({tintColor}) => (<Icon name="ghost" color={tintColor} size={24}/>)
            }
        },
        Character: {
            screen: Character,
            navigationOptions: {
                title: 'Персонаж',
                tabBarIcon: ({tintColor}) => (<Icon name="account" color={tintColor} size={24}/>)
            }
        },
    },
    {
        initialRouteName: 'Quest',
        activeColor: '#f0edf6',
        inactiveColor: '#bba7c0',
        barStyle: {backgroundColor: '#594865'},
        backBehavior: 'initialRoute',
        shifting: true,
    }
);
export default Account = createAppContainer(AppNavigator);
