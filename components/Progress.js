import React, { Component } from 'react';
import { View, Text,ProgressBarAndroid } from 'react-native';
export default class Progress extends Component {
    render() {

        return (
            <View  style={{height:40,width:'100%'}}>
                <Text style={{flex: 1}}>{this.props.title}: {this.props.progress}/{this.props.to}</Text>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={((this.props.progress*100)/this.props.to)/100}
                    color={this.props.color}
                />
            </View>
        )
    }
};
