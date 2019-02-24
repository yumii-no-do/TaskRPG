import {combineReducers} from 'redux';
import quests from './quests';
import boss from './boss';
import character from './character';
import app from './app';

export default combineReducers({
    quests,
    boss,
    character,
    app
})