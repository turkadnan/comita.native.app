import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import appReducer from './reducers/AppReducer';

const rootReducer = combineReducers({
  appReducer,
});

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
