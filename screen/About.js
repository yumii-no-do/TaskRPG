import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Title from "../components/Title";
import ListContainer from "../components/ListContainer";
import FloatingInputButton from "../components/FloatingInputButton";
import HyperlinkedText from 'react-native-hyperlinked-text'
import {connect} from 'react-redux';
class About extends Component {
    render() {
        return (
            <View style={{position: 'relative', height: '100%', width: '100%'}}>
                <Title title={'О приложении'}
                       styleContainer={{backgroundColor:this.props.userStore.theme.headerBackground}}
                       styleText={{color:this.props.userStore.theme.headerColor}}/>
                <View style={{padding:10,}}>
                    <Text style={{marginBottom:10}}>TaskRPG - это такс-менеджер, приложение для отслеживания своих дел.</Text>
                    <Text style={{marginBottom:10}}>Разработчик: Yumii.co</Text>
                    <HyperlinkedText linkDefs={[
                        {
                            regex: /\[(.*?)\]\((.*?)\)/mgi,
                            style: {color: 'blue'},
                            replaceText: (orig, text, url) => text,
                            onPress: (orig, text, url) => HyperlinkedText._openWebUrl(url)
                        }]}>По всем вопросам обращаться на страницу в [магазие приложений](https://play.google.com) или по адресу электронной почты [ongakunoato@gmail.com](mailto:ongakunoato@gmail.com)</HyperlinkedText>
                </View>
            </View>
        )
    }
};
export default connect(
    state => ({
        userStore: state.app,
    })
)(About);
