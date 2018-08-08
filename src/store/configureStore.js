import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))

  );

};

