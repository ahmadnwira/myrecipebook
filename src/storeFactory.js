import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';

const makeStore = () => {
    const store = createStore(RootReducer);
    return store;
};

export default makeStore;