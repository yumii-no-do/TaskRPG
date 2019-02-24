import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListItemQuest from "./ListItemQuest";
import ListItemBoss from "./ListItemBoss";

import {connect} from 'react-redux';

class ListContainer extends Component {


    render() {

        let items = null;
        if(this.props.type === 'quest') {
            items = this.props.questStore.map(item => {
                return (
                    item.ready === false && item.defeat === false ? <ListItemQuest
                        key={item.id}
                        {...item}
                    /> : null)
            })
        }
        if(this.props.type === 'boss') {
            items = this.props.bossStore.map(item => {
                return (
                    item.visible === true ? <ListItemBoss
                        key={item.id}
                        {...item}
                    /> : null)
            })
        }



        return (
            <ScrollView>
                {items}
            </ScrollView>
        );
    }
}

export default connect(
    state => ({
        questStore: state.quests,
        bossStore: state.boss
    }),
    dispatch => ({})
)(ListContainer);