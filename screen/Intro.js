import React, {Component} from 'react';
import {View,
    StyleSheet,} from 'react-native';
import IntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
class Intro extends Component {

    state = {
        showSettings: false,
    }
    render() {
            return (
                <IntroSlider
                    slides={slides}
                    onDone={this._onDone}
                    renderDoneButton={this._renderNextButton}
                    renderNextButton={this._renderNextButton}
                />
            )
    }
    _onDone = () => {
        this.props.navigation.navigate('CharacterSettings');
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="arrow-right"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{backgroundColor: 'transparent'}}
                />
            </View>
        );
    }



}
export default connect(
    state => ({
        userStore: state.app
    }),
    dispatch => ({
    })
)(Intro);

const slides = [
    {
        key: '1',
        title: 'TaskRPG',
        text: 'Приложение для введения своих дел.\nНо не простое.\nЗадачи деляться на два типа: одноразовые и долгосрочные.',
        backgroundColor: '#59b2ab',
        image: require('../assets/introImage/preview.png'),
        imageStyle: {
            width: 320,
            height: 320,
            resizeMode: 'contain',borderRadius:5,
        },
    },
    {
        key: '2',
        title: 'Работа с одноразовыми задачами',
        text: 'Если задача была выполнена, тогда нужно смахнуть её в право',
        backgroundColor: '#22bcb5',
        image: require('../assets/introImage/1.png'),
        imageStyle: {
            width: 320,
            resizeMode: 'contain',borderRadius:5,
        },
    },
    {
        key: '3',
        title: 'Работа с одноразовыми задачами',
        text: 'Если задача не была выполнена, тогда нужно смахнуть её влево',
        backgroundColor: '#22bcb5',
        image: require('../assets/introImage/2.png'),
        imageStyle: {
            width: 320,
            resizeMode: 'contain',
            borderRadius:5,
        },
    },
    {
        key: '4',
        title: 'Работа с долгосрочными задачами',
        text: 'Если задача была выполнена, тогда её нужно смахнуть её в право',
        backgroundColor: '#febe29',
        image: require('../assets/introImage/4.png'),
        imageStyle: {
            width: 320,
            resizeMode: 'contain',borderRadius:5,
        },
    },{
        key: '5',
        title: 'Работа с долгосрочными задачами',
        text: 'Тогда у босса уменьшится количество очков здоровья',
        backgroundColor: '#febe29',
        image: require('../assets/introImage/5.png'),
        imageStyle: {
            width: 320,
            resizeMode: 'contain',borderRadius:5,
        },
    },{
        key: '6',
        title: 'Работа с долгосрочными задачами',
        text: 'Если задача не была выполнена, тогда нужно смахнуть её влево',
        backgroundColor: '#febe29',
        image: require('../assets/introImage/6.png'),
        imageStyle: {
            width: 320,
            resizeMode: 'contain',borderRadius:5,
        },
    },

];

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
    },
    characterImageCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});