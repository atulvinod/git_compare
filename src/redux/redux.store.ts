import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './redux.root.reducer';
import thunk from 'redux-thunk';

const middleWare = [logger,thunk];

const store = createStore(rootReducer,applyMiddleware(...middleWare));

export default store;