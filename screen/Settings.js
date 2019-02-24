import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity } from 'react-native';
import Title from "../components/Title";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Settings extends Component {

    render() {
        const links = [
            {
                title:'Персонаж',
                onPress:()=>{this.props.navigation.navigate('CharacterSettings')}
            },
            {
                title:'О приложении',
                onPress:()=>{this.props.navigation.navigate('About')}
            },
        ];
        const res = links.map((item,index)=>{
            return(
                <TouchableOpacity key={index} onPress={item.onPress} style={{padding:15,borderWidth:1,borderColor: "#dbdbdb"}} activeOpacity={0.7}>
                    <Text style={{fontSize: 20,}}>{item.title}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View>
                <Title title={'Настройки'}/>
                {res}
            </View>
        )
    }
};
const styles = StyleSheet.create({
    btnList: {
       backgroundColor:'#ffffff',
        padding:10,
        margin:10,
    },
});