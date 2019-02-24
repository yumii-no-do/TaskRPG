import React, {Component} from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import config from '../config'
import Moment from 'moment';
import 'moment/min/locales.min';
class ListItemQuest extends Component {
    state = {
        isReadySwipeLeft: false,
        isReadySwipeRight: false,
        isReadyLeft: false,
        isReadyRight: false
    };
    ready() {
        this.setState({
            isReadyLeft: true,
        });
        this.props.onReady(
            this.props.id,
            this.props.XPtoWin,
            config.quests.coefficients.plusHPReady
        );
        // console.warn('ready, id:' + this.props.id);
    }
    defeat() {
        this.setState({
            isReadyRight: true,
        });
        this.props.onDefeat(this.props.id, this.props.damage);
        // console.warn('defeat, id:' + this.props.id);
    }
    render() {
        const leftContent = <View style={styles.nierContainer}>
            {this.state.isReadySwipeLeft ? <Text style={styles.nierContainerText}>Выполнено</Text> : null}
            <Icon name="sword-cross" color={'#ffffff'} size={34} style={{padding: 10}}/>
            {this.state.isReadySwipeLeft ? null :
                <Icon name="chevron-right" color={'#ffffff'} size={34} style={{padding: 10}}/>}
        </View>;
        const rightButtons = <View style={styles.nierContainer}>
            {this.state.isReadySwipeRight ? null :
                <Icon name="chevron-left" color={'#ffffff'} size={34} style={{padding: 10}}/>}
            <Icon name="skull" color={'#ffffff'} size={38} style={{padding: 10}}/>
            {this.state.isReadySwipeRight ? <Text style={styles.nierContainerText}>Не выполнено</Text> : null}</View>;
        Moment.locale('ru');
        return (
            <Swipeable
                leftContent={leftContent}
                leftContainerStyle={this.state.isReadySwipeLeft ? styles.leftContainer : styles.leftContainerReady}
                rightContent={rightButtons}
                rightContainerStyle={this.state.isReadySwipeRight ? styles.rightContainer : styles.rightContainerReady}
                onLeftActionActivate={() => {
                    //console.warn('Почти');
                    this.setState({
                        isReadySwipeLeft: true,
                    })
                }}
                onLeftActionDeactivate={() => {
                    //console.warn('Почти');
                    this.setState({
                        isReadySwipeLeft: false,
                    })
                }}
                onRightActionDeactivate={() => {
                    //console.warn('Почти');
                    this.setState({
                        isReadySwipeRight: false,
                    })
                }}
                onRightActionActivate={() => {
                    //console.warn('Почти');
                    this.setState({
                        isReadySwipeRight: true,
                    })
                }}
                onLeftActionComplete={this.ready.bind(this)}
                onRightActionComplete={this.defeat.bind(this)}>
                <View style={styles.ListItemContent}>
                    <Image
                        resizeMode='contain'
                        style={{width: 80, height: 80, marginRight: 10}}
                        source={this.props.imageSrc}
                    />
                    <View style={styles.ListItem_textContainer}>
                        <Text style={{flex: 1}}>{this.props.title}</Text>
                        <Text style={{
                            flex: 1,
                            height: 20,
                            paddingTop: 5,
                            fontSize: 12,
                            color:'#898989'
                        }}>{Moment(this.props.date).format('D.M.YYYY, HH:mm')}</Text>
                    </View></View>
            </Swipeable>
        );
    }

}

const styles = StyleSheet.create({
    ListItemContent: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:"#dbdbdb"
    },
    ListItem_textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    ListItemContentDisable: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    leftContainer: {
        backgroundColor: '#58a124',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    leftContainerReady: {
        backgroundColor: '#a4dd74',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightContainer: {
        backgroundColor: '#750800',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainerReady: {
        backgroundColor: '#a65f62',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    nierContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nierContainerText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '300'
    }
});

export default connect(
    state => ({
        questStore: state.quests
    }),
    dispatch => ({
        onReady: (idQuest, plusXP, plusHP) => {
            dispatch({type: 'READY_QUEST', payload: idQuest});
            dispatch({type: 'PLUS_XP', payload: plusXP});
            dispatch({type: 'PLUS_HP', payload: plusHP});
        },
        onDefeat: (idQuest, damage) => {
            // console.warn({idQuest,damage});
            dispatch({type: 'DEFEAT_QUEST', payload: idQuest});
            dispatch({type: 'MINUS_HP', payload: damage});
        }
    })
)(ListItemQuest);