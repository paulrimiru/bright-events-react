import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
