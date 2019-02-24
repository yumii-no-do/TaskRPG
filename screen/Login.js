import React from 'react';
import {StyleSheet, Text, View, AsyncStorage,Button} from 'react-native';

import * as Expo from 'expo';
import Title from "../components/Title";


async function signInWithGoogleAsync() {
    try {
        const result = await Expo.Google.logInAsync({
            androidClientId: "810678934776-d5fgko71vvrugv1i8n9bok094pbe1250.apps.googleusercontent.com",
            iosClientId: '810678934776-d5fgko71vvrugv1i8n9bok094pbe1250.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            // console.warn(result.accessToken);
            return result.accessToken;
        } else {
            return {cancelled: true};
        }
    } catch(e) {
        return {error: true};
    }
}
export default class Login extends React.Component {
    render() {

        return (
            <View>
                <Title title={'Логин'}/>
                <Text>
                    Login
                    Login
                    Login
                    Login
                    Login
                </Text>
                <Button
                title='login'
                onPress={() => this.props.navigation.navigate('Account')}
                />
            </View>

        );
    }
}



