import {
    createStore, combineReducers,
    applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        weather: weatherReducer
    }),
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;
