
import {combineReducers} from 'redux' 
import weatherReducer from "./weatherReducers"


const rootReducer=combineReducers(
   {
   weatherReducer
   }
)


export default rootReducer;
