import { combineReducers } from 'redux';
import Reducers from '../reducers/Reducers';

const RootReducer = combineReducers({
    Reducers: Reducers, // Reducers is a placeholder for your reducer
});

export default RootReducer;