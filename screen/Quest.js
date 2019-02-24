import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ListContainer from "../components/ListContainer";
import FloatingInputButton from "../components/FloatingInputButton";
import Title from "../components/Title";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Quest extends Component {
    render() {
        return (
            <View style={{position: 'relative', height: '100%', width: '100%'}}>
                <Title title={'Квесты'}
                       styleContainer={{backgroundColor:this.props.userStore.theme.headerBackground}}
                       styleText={{color:this.props.userStore.theme.headerColor}}/>
                <ListContainer style={{
                    marginTop:20,
                    width: '100%',
                    height: '100%',
                    flex: 1,
                }} type='quest'/>
                <FloatingInputButton type={'quest'}/>
            </View>
        )
    }
    componentDidMount() {
        if (this.props.userStore.newUser) {
            this.props.navigation.navigate('Intro');
        }
    }
}
export default connect(
    state => ({
        store: state,
        userStore: state.app,
    }),
    dispatch => ({
        setname: (name) => {
            dispatch({type: 'SET_NAME', payload: name})
        }
    })
)(Quest);

    // {console.log('--- update store:',this.props.store)}