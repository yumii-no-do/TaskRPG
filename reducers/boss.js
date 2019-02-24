import config from '../config';
const initialState = [
    {
        id: 1,
        imageSrc: config.quests.getBossImage(1),
        title: 'Выучить таблицу умножения',
        ready: false,
        defeat: false,
        visible:true,
        damageBoss: 100,
        damageCharacter: 250,
        XPtoWin: 20,
        HPFull:1000,
        HP:1000,
        date:{
            start: '2019-01-30T15:01:00.000Z',
            end: '2019-02-10T15:01:00.000Z',
            statistic:[]
        }
    },
];

export default boss = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOSS': {
            // console.log('--- update store boss: ',action.payload);
            return [
                ...state,
                {
                    id:state[state.length-1].id + 1,
                    imageSrc: config.quests.getBossImage(config.character.getLevel(action.payload.XP)),
                    title: action.payload.title,
                    // ready: false,
                    visible: true,
                    damageBoss: 100,
                    damageCharacter: action.payload.damageCharacter,
                    XPtoWin: config.quests.coefficients.XPtoWin,
                    HPFull:action.payload.HP,
                    HP:action.payload.HP,
                    date:{
                        start: action.payload.dateStart,
                        end: action.payload.dateEnd,
                        statistic:[],
                    },
                }
            ]
        }
        case 'READY_BOSS': {
            return state.map((item) => {
                if (item.id === action.payload) {
                    // item.ready = true;
                    item.date.statistic.push(true);
                    item.HP = item.HP - item.damageCharacter;
                    return item;
                } else {
                    return item;
                }
            });
        }
        case 'DEFEAT_BOSS': {
            return state.map((item) => {
                if (item.id === action.payload) {
                    // item.defeat = true;
                    item.date.statistic.push(false);
                    return item;
                } else {
                    return item;
                }
            });
        }
        case 'DISABLE_BOSS': {
            return state.map((item) => {
                if (item.id === action.payload) {
                    item.visible = false;
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