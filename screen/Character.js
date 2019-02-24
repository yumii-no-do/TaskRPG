import React, {Component} from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';
import {connect} from 'react-redux';
import Title from "../components/Title";
import CharacterBox from "../components/CharacterBox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import config from "../config";
 class Character extends Component {
    render() {
        return (
                <View  style={{position: 'relative', height: '100%', width: '100%'}}>
                    <Title
                        title={'Персонаж'}
                        child={
                            <TouchableOpacity onPress={this.settings.bind(this)} style={{paddingRight:10}} activeOpacity={0.7}>
                                <Icon name="settings" color={this.props.userStore.theme.headerColor} size={25}/>
                            </TouchableOpacity>
                        }
                        styleContainer={{backgroundColor:this.props.userStore.theme.headerBackground}}
                        styleText={{color:this.props.userStore.theme.headerColor}}/>
                    <View>
                        <CharacterBox />
                    </View>
                </View>
        )
    }
     settings(){
         this.props.navigation.navigate('Settings');
     }
}
export default connect(
    state => ({
        characterStore: state.character,
        userStore: state.app,
    })
)(Character);

