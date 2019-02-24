
const initialState = {
    token: 'wlejfh3k4bfcwensdfj43',
    newUser:true,
    themes:[
        {
            headerBackground:'#a159b1',
            headerColor:'#ffffff',
        },
        {
            headerBackground:'#bfc9ff',
            headerColor:'#2e3045',
        }
    ],
    theme:{
        headerBackground:'#a159b1',
        headerColor:'#ffffff',
    },
};

export default app = (state = initialState, action) => {
    if (action.type === 'SET_INTRO_VISIT') {
        return {
            ...state,
            newUser:false
        }
    }
    return state;
};