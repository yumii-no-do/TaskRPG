import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Title from "../components/Title";
import ListContainer from "../components/ListContainer";
import FloatingInputButton from "../components/FloatingInputButton";
import {connect} from 'react-redux';
class Boss extends Component {
    render() {
        return (
            <View style={{position: 'relative', height: '100%', width: '100%'}}>
                <Title title={'Боссы'}
                       styleContainer={{backgroundColor:this.props.userStore.theme.headerBackground}}
                       styleText={{color:this.props.userStore.theme.headerColor}}/>
                <ListContainer style={{
                    marginTop:20,
                    width: '100%',
                    height: '100%',
                    flex: 1,
                }} type='boss'/>
                <FloatingInputButton type={'boss'}/>
            </View>
        )
    }
};
export default connect(
    state => ({
        userStore: state.app,
    })
)(Boss);
