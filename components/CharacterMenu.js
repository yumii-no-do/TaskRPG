import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Button,
    SafeAreaView,
    StatusBar,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import config from "../config";

class CharacterMenu extends Component {

    render() {

        return (
            <Image
                resizeMode='contain'
                style={{
                    flex: 1,
                    width: 40,
                    height:40,
                }}
                source={this.props.characterStore.src}
            />
        )
    }
}


export default connect(
    state => ({
        characterStore: state.character
    }),
    dispatch => ({})
)(CharacterMenu);


const styles = StyleSheet.create({

});