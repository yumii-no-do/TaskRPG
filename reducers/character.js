import {ToastAndroid} from 'react-native';
const initialState = {
        name: '',
        HP:1000,
        XP:0
    };
export default character = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME_CHARACTER': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'PLUS_XP': {
            ToastAndroid.showWithGravity(
                '+ '+action.payload+' XP',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return {
                ...state,
                XP: state.XP + action.payload
            }
        }
        case 'PLUS_HP': {

            return {
                ...state,
                HP: state.HP + action.payload
            }
        }
        case 'MINUS_XP': {
            ToastAndroid.showWithGravity(
                '- '+action.payload+' XP',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return {
                ...state,
                XP: state.XP - action.payload
            }
        }
        case 'MINUS_HP': {
            ToastAndroid.showWithGravity(
                '- '+action.payload+' HP',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            return {
                ...state,
                HP: state.HP - action.payload
            }
        }
        case 'SET_INTRO': {
            return {
                ...state,
                name: action.payload.name,
                src: action.payload.src,
            }
        }
        default:return state;
    }

};