import config from '../config';
const initialState = [
    {
        id: 1,
        imageSrc: config.quests.getMonsterImage(1),
        title: 'Купить хлеб',
        ready: false,
        defeat: false,
        damage: 100,
        XPtoWin: 20,
        date: '2019-01-23T15:01:00.000Z'
    }
];
export default quests = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUEST': {
            // console.log('--- update store quest: ',action.payload);
            return [
                ...state,
                {
                    id:state[state.length-1].id + 1,
                    imageSrc: config.quests.getMonsterImage(config.character.getLevel(action.payload.XP)),
                    title: action.payload.title,
                    ready: false,
                    defeat: false,
                    damage: config.quests.coefficients.damage,
                    XPtoWin: config.quests.coefficients.XPtoWin,
                    date: action.payload.date,

                }

            ]
        }
        case 'DELETE_QUEST': {
            return state.filter((item) => {
                if (item.id !== action.payload) {
                    return item
                }
            });
        }
        case 'EDIT_QUEST': {
            return state;
        }
        case 'READY_QUEST': {
            return state.map((item) => {
                if (item.id === action.payload) {
                    item.ready = true;
                    return item;
                } else {
                    return item;
                }
            });
        }
        case 'DEFEAT_QUEST': {
            return state.map((item) => {
                if (item.id === action.payload) {
                    item.defeat = true;
                    return item;
                } else {
                    return item;
                }
            });
        }
        default:
            return state;
    }
};