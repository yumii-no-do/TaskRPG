import React from 'react';
import {StyleSheet, Text, View, AsyncStorage,Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Quest from "./screen/Quest";
import Boss from "./screen/Boss";
import Settings from "./screen/Settings";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Root from "./Root";
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './configureStore';

const { persistor, store } = configureStore();

export default class App extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Root/>
                </PersistGate>
            </Provider>

        );
    }
}



