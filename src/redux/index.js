import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import userReducer from './modules/user';
import events from './modules/events';
import cities from './modules/cities';
import authenticationReducer from './modules/authentication';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const rootReducer = combineReducers({
  form: formReducer,
  authentication: authenticationReducer,
  userReducer : userReducer,
  events : events,
  cities : cities
});

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
