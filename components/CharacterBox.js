import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import config from "../config";
import Progress from '../components/Progress';

class CharacterBox extends Component {

    render() {
        config.character.getCharacterImage().forEach(item => {
            Image.resolveAssetSource(item);
        });
        return (
            <View>
                <ImageBackground
                    imageStyle={{resizeMode: 'cover'}}
                    source={config.character.getLocationsImage(config.character.getLevel(this.props.characterStore.XP))}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: 240,
                    }}
                >
                    {/*<View>*/}
                    <View style={{
                        flex: 3,
                        ...styles.characterCont,
                    }}>
                        <Image resizeMode='contain' style={{width: '100%', height: 240,}}
                               source={this.props.characterStore.src}/>
                    </View>
                    <View style={{
                        flex: 2,
                        ...styles.characterCont,
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        <Text style={styles.characterText_sub}>Имя:</Text>
                        <Text style={styles.characterText}>{this.props.characterStore.name}</Text>
                        <Text style={{marginTop:5}}>
                            <Text style={styles.characterText_sub}>Уровень:</Text> <Text
                            style={styles.characterText}>{config.character.getLevel(this.props.characterStore.XP)}</Text>
                        </Text>
                        <View style={{
                            backgroundColor: '#444444',
                            opacity: 0.2,
                            width: '120%',
                            height: 240,
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            zIndex: -1,
                        }}>
                        </View>
                    </View>

                </ImageBackground>
                <View style={{
                    padding: 10,
                }}>
                    <Progress title={'HP'} key={1} progress={this.props.characterStore.HP} to={1000} color={'#ee2523'}/>
                    <Progress title={'XP'} key={2} progress={this.props.characterStore.XP} to={config.character.getToNextLevel(config.character.getLevel(this.props.characterStore.XP))} color={'#2fee1b'}/>
                </View>
            </View>
        )
    }
}


export default connect(
    state => ({
        characterStore: state.character
    }),
    dispatch => ({})
)(CharacterBox);


const styles = StyleSheet.create({
    characterBox: {
        flex: 1,
        height: 300,
        zIndex: 1,
    },
    characterCont: {
        padding: 10,
    },
    characterText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '500',
        zIndex: 100,

    },
    characterText_sub: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '300',
        zIndex: 100,
    },
    characterText__name: {
        color: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: '600',
    }
});