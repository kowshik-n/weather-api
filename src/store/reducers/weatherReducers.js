
const initialState= {
    weather:[],
};
    


const weatherReducers = (state=initialState, {type,payload}) => {
    switch(type) {
        case "FETCH_API": return {...state,payload};
        default: return state;
    }
}

export default weatherReducers;

