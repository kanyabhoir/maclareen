import { createStore } from 'redux';
import RootReducer from './rootReducer/RootReducer';

const Store = createStore(RootReducer); // rootReducer is a placeholder for your combined reducers

export default Store;