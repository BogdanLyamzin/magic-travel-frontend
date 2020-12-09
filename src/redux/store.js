import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { countryReducer } from './country/countryReducer';
import { countryItemReducer } from './countryItem/countryItemReducer';

const rootReducer = combineReducers({
    country: countryReducer,
    countryItem: countryItemReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
