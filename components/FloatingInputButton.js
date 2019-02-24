import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, TextInput, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import Moment from 'moment';


class FloatingInputButton extends Component {

    state = {
        isOpen: false,
        text: '',
        isDateTimePickerVisible: false,
        date: Moment(),
        dateStart: Moment(),
        dateEnd: Moment().add(30, 'days'),
        isDatePickerVisibleStart: false,
        isDatePickerVisibleEnd: false,
    };

    addOpen() {
        this.setState({
            isOpen: true
        });
        // console.log('открываю');
    }

    addQuest() {
        this.setState({
            isOpen: false,
        });
        console.log({
            title: this.state.text,
            date: this.state.date,
            XP: this.props.character.XP
        });
        this.props.onAddQuest({
            title: this.state.text,
            date: this.state.date,
            XP: this.props.character.XP
        });

    }
    addBoss() {
        this.setState({
            isOpen: false,
        });
        console.log({
            title: this.state.text,
            dateStart: this.state.dateStart,
            dateEnd: this.state.dateEnd,
            XP: this.props.character.XP,
            HP:Moment(this.state.dateEnd).diff(this.state.dateStart,'days')*125,
            damageCharacter:(Moment(this.state.dateEnd).diff(this.state.dateStart,'days')*125)/Moment(this.state.dateEnd).diff(this.state.dateStart,'days'),
        });
        this.props.onAddBoss({
            title: this.state.text,
            dateStart: this.state.dateStart,
            dateEnd: this.state.dateEnd,
            XP: this.props.character.XP,
            HP:Moment(this.state.dateEnd).diff(this.state.dateStart,'days')*125,
            damageCharacter:(Moment(this.state.dateEnd).diff(this.state.dateStart,'days')*125)/Moment(this.state.dateEnd).diff(this.state.dateStart,'days'),
        });

    }

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDateTimePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({
            date,
        });
        this._hideDateTimePicker();
    };

    _showDatePickerStart = () => this.setState({isDatePickerVisibleStart: true});

    _hideDatePickerStart = () => this.setState({isDatePickerVisibleStart: false});

    _handleDatePickedStart = (dateStart) => {
        console.log('A date has been picked: ', dateStart);
        this.setState({
            dateStart,
        });
        this._hideDatePickerStart();
    };
    _showDatePickerEnd = () => this.setState({isDatePickerVisibleEnd: true});

    _hideDatePickerEnd = () => this.setState({isDatePickerVisibleEnd: false});

    _handleDatePickedEnd = (dateEnd) => {
        console.log('A date has been picked: ', dateEnd);
        this.setState({
            dateEnd,
        });
        this._hideDatePickerEnd();
    };


    render() {
        const inputQuest = this.state.isOpen ? <View style={styles.inputBox}>
            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDateTimePicked}
                onCancel={this._hideDateTimePicker}
                mode={'datetime'}
            />
            <Text style={{
                fontSize: 19,
                color: '#868686',
                marginBottom: 10,
            }}>Добавление квеста</Text>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Icon style={{
                    marginRight: 10
                }} name="text" color={'#c366bf'} size={25}/>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        this.setState({text});
                    }}
                    maxLength={400}
                    placeholder={'Купить молоко...'}
                    autoFocus={true}
                    numberOfLines={3}
                />
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={this._showDateTimePicker.bind(this)} style={styles.pickerBtn}
                                      activeOpacity={0.7}>
                        <Icon name="calendar-clock" color={'#c366bf'} size={25}/>
                    </TouchableOpacity>
                    <Text style={{flex: 1, color: '#898989'}}>
                        {(this.state.date === null) ? null : Moment(this.state.date).format('D.M.YYYY, HH:mm')}
                    </Text>

                </View>
                <TouchableOpacity onPress={this.addQuest.bind(this)} style={styles.submitBtn} activeOpacity={0.7}>
                    <Icon name="check" color={'#ffffff'} size={25}/>
                </TouchableOpacity>
            </View>

        </View> : <TouchableOpacity onPress={this.addOpen.bind(this)} style={styles.btn} activeOpacity={0.7}>
            <Icon name="plus" color={'#ffffff'} size={25}/>
        </TouchableOpacity>;
        const inputBoss = this.state.isOpen ? <View style={styles.inputBoxBoss}>
            <DateTimePicker
                isVisible={this.state.isDatePickerVisibleStart}
                onConfirm={this._handleDatePickedStart}
                onCancel={this._hideDatePickerStart}
                mode={'date'}
            />
            <DateTimePicker
                isVisible={this.state.isDatePickerVisibleEnd}
                onConfirm={this._handleDatePickedEnd}
                onCancel={this._hideDatePickerEnd}
                mode={'date'}
            />
            <Text style={{
                fontSize: 19,
                color: '#868686',
                marginBottom: 10,
            }}>Добавление босса</Text>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Icon style={{
                    marginRight: 10
                }} name="text" color={'#c366bf'} size={25}/>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        this.setState({text});
                    }}
                    maxLength={400}
                    placeholder={'Готовится к экзамену...'}
                    autoFocus={true}
                    numberOfLines={3}
                />
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}>
                        <TouchableOpacity onPress={this._showDatePickerStart.bind(this)} style={styles.pickerBtn}
                                          activeOpacity={0.7}>
                            <Icon name="calendar-today" color={'#c366bf'} size={25}/>
                        </TouchableOpacity>
                        <Text style={{color: '#898989'}}>
                            Начало
                        </Text>
                        <Icon name="menu-right" color={'#898989'} size={20}/>
                        <Text style={{color: '#898989'}}>
                            {(this.state.dateStart === null) ? null : Moment(this.state.dateStart).format('D.M.YYYY')}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={this._showDatePickerEnd.bind(this)} style={styles.pickerBtn}
                                          activeOpacity={0.7}>
                            <Icon name="calendar" color={'#c366bf'} size={25}/>
                        </TouchableOpacity>
                        <Text style={{color: '#898989'}}>
                            Конец
                        </Text>
                        <Icon name="menu-right" color={'#898989'} size={20}/>
                        <Text style={{color: '#898989'}}>
                            {(this.state.dateEnd === null) ? null : Moment(this.state.dateEnd).format('D.M.YYYY')}
                        </Text>
                    </View>


                </View>
                <View style={{
                    flex: 1,
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}>
                    <TouchableOpacity onPress={this.addBoss.bind(this)} style={styles.submitBtn} activeOpacity={0.7}>
                        <Icon name="check" color={'#ffffff'} size={25}/>
                    </TouchableOpacity>
                </View>
            </View>

        </View> : <TouchableOpacity onPress={this.addOpen.bind(this)} style={styles.btn} activeOpacity={0.7}>
            <Icon name="plus" color={'#ffffff'} size={25}/>
        </TouchableOpacity>;

        const handler = this.state.isOpen ? <TouchableOpacity
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
                position: 'absolute',
                zIndex: 0,
                opacity: 0.3
            }}
            onPress={() => {
                this.setState({
                    isOpen: false,
                });
            }
            }
        /> : null;

        return (
            <View style={this.state.isOpen ? styles.floatButtonActive : styles.floatButton}>

                {this.props.type === 'quest' ? inputQuest : inputBoss}
                {handler}

            </View>


        );
    }
}

export default connect(
    state => ({
        questStore: state.quests,
        character: state.character
    }),
    dispatch => ({
        onAddQuest: (obj) => {
            dispatch({type: 'ADD_QUEST', payload: obj})
        },
        onAddBoss: (obj) => {
            dispatch({type: 'ADD_BOSS', payload: obj})
        }
    })
)(FloatingInputButton);

const styles = StyleSheet.create({
    floatButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        position: 'absolute',
        bottom: 10,
        width: '100%'
    },
    floatButtonActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
    },

    btn: {
        width: 55,
        height: 55,
        elevation: 5,
        backgroundColor: '#c366bf',
        borderRadius: 100,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtn: {
        width: 55,
        height: 55,
        elevation: 1,
        backgroundColor: '#c366bf',
        borderRadius: 100,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerBtn: {
        width: 55,
        height: 55,
        elevation: 1,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        marginRight: 20,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {

        backgroundColor: '#fbfbfb',
        width: '95%',
        height: 220,
        padding: 20,
        borderRadius: 10,
        elevation: 10,
        zIndex: 10000,
        bottom:10,position:'absolute',
    },
    inputBoxBoss: {
        backgroundColor: '#fbfbfb',
        width: '100%',
        height: 300,
        padding: 20,
        borderRadius: 10,
        elevation: 10,
        zIndex: 10000,
        bottom:10,position:'absolute',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e2e2e2',
        padding: 5,
        fontSize: 18,
        flex: 1,
        // height:30,
    }
});