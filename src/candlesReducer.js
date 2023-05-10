
const GET_CANDLES = 'GET_CANDLES';

let initialState = {
    categories: [
        {
            title: 'Soy candle in a glass',
            skills: 'Number of hours of burning 40+',
            id: 1,
        },
        {
            title: 'Soy candle in plaster',
            skills: 'Unique candle design',
            id: 2,
        },
        {
            title: 'Massage candles',
            skills: 'Hypoallergenic, 0+',
            id: 3
        }
    ]

};

const candlesReducer = ((state = initialState, action) => {
    switch(action.type){
    
        case 'GET_CANDLES': {
        let body = action.newMessageBody;
        return {...state, id:action.id};
    };
    default: return state;
}
});

export const getCandlesActionCreator = (id) => {
    return{
        type: GET_CANDLES,
        id
    }
}

export default candlesReducer;