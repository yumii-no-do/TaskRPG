import React, {Component} from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
export default class Title extends Component {
    render() {
        return (
            <View style={{...styles.titleCont,...this.props.styleContainer}}>
                <Text  style={{...styles.display2,...this.props.styleText}}>{this.props.title}</Text>
                {this.props.child}
            </View>
        )
    }
   }
const styles = StyleSheet.create({
    display2: {
        fontSize: 30,
        color:'#fff',
        flex:1,
    },
    titleCont:{
        backgroundColor: '#a159b1',
        padding:10,
        paddingTop: 10,
        width: '100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        elevation: 2,
        top:0,
    },
    containerChildren:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    }
});