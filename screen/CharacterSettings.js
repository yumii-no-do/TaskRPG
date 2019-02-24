import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Hoshi} from 'react-native-textinput-effects';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Image,
    FlatList,
    Button,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../config';
import Title from "../components/Title";

class CharacterSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            skin: null,
            srcIndex: 0,
            data: config.character.getCharacterImage(),
        };
    }

    render() {
        return (
            <View style={{backgroundColor: '#64acb0', position: 'relative', height: '100%', width: '100%'}}>
                <Title
                    title={'Создание персонажа'}
                    styleText={{color: '#fff'}}
                    styleContainer={{backgroundColor: '#64acb0', elevation: 0,}}
                />
                <ScrollView style={{
                    marginTop: 40,
                    width: '100%',
                    height: '100%',
                    flex: 1,
                }}>
                    <View style={styles.cont}>
                        <Hoshi
                            label={'Имя персонажа'}
                            borderColor={'#b76c94'}
                            onChangeText={(name) => {
                                this.setState({name});
                                console.log(this.state.name);
                            }}
                            value={this.state.name}
                            inputStyle={{color: '#fff'}}
                            labelStyle={{color: '#fff'}}

                        />
                    </View>
                    <View style={styles.characterImageCont}>
                        <TouchableHighlight
                            onPress={this.previewSkin}
                            style={styles.buttonCircle}>
                            <Icon
                                name="arrow-left"
                                color="rgba(255, 255, 255, .9)"
                                size={24}
                                style={{backgroundColor: 'transparent'}}
                            />
                        </TouchableHighlight>
                        <Image resizeMode='contain'
                               style={{width: 200, height: 200, padding: 10}}
                               source={this.state.data[this.state.srcIndex]}
                               key={this.state.data[this.state.srcIndex]}
                        />
                        <TouchableHighlight
                            onPress={this.nextSkin}
                            style={styles.buttonCircle}>
                            <Icon
                                name="arrow-right"
                                color="rgba(255, 255, 255, .9)"
                                size={24}
                                style={{backgroundColor: 'transparent'}}
                            />
                        </TouchableHighlight>
                    </View>

                </ScrollView>
                <TouchableHighlight
                    onPress={this.onDoneData}
                    style={{...styles.buttonCircle, right: 16, bottom: 20, position: 'absolute'}}>
                    <View>
                        <Icon
                            name="check"
                            color="rgba(255, 255, 255, .9)"
                            size={24}
                            style={{backgroundColor: 'transparent'}}
                        />

                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    nextSkin = () => {
        if (this.state.srcIndex < this.state.data.length - 1) {

            this.setState({
                srcIndex: this.state.srcIndex + 1
            })
        }
        console.log('---', this.state.srcIndex, this.state.data.length);
    }
    previewSkin = () => {
        if (this.state.srcIndex > 0) {

            this.setState({
                srcIndex: this.state.srcIndex - 1
            })
        }
        console.log('---', this.state.srcIndex, this.state.data.length);
    }
    // componentDidMount() {
    //     if (!this.props.userStore.newUser) {
    //         this.props.navigation.navigate('Account');
    //     }
    // }

    onDoneData = () => {
        this.props.saveUserData({
            name: this.state.name==''?'Gamer':this.state.name,
            src: this.state.data[this.state.srcIndex]
        });
        console.log({
            name: this.state.name==''?'Gamer':this.state.name,
            src: this.state.data[this.state.srcIndex]
        });
        console.log('btn');
        this.props.navigation.navigate('Character');

    }

}


export default connect(
    state => ({
        userStore: state.app
    }),
    dispatch => ({
        saveUserData: (data) => {
            // console.warn(data);
            dispatch({type: 'SET_INTRO', payload: data})
            dispatch({type: 'SET_INTRO_VISIT'})
        }
    })
)(CharacterSettings);

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cont: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    characterImageCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 200,
        marginTop: 100,
    },
    image: {
        width: 320,
        height: 320,
    }
});