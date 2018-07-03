import _ from 'lodash';
import { APP_NAMESPACE } from '../../helpers/redux-constants';
import { put, post, get, del } from '../../helpers/http-utils';
import { updateStore, buildGenericInitialState, handleError } from '../../helpers/store-utils';
import { CHANGE_AUTH, GET_AUTHENTICATED_USER } from './authentication';

const USER_ENDPOINT_BASE = 'user';
const typeBase = `${APP_NAMESPACE}/${USER_ENDPOINT_BASE}/`;

// Constants
export const GET_USER = `${typeBase}GET_USER`;
export const GET_USERS = `${typeBase}GET_USERS`;
export const getUser = id => async (dispatch) => {
  try {
    const response = await get(dispatch, GET_USER, `${USER_ENDPOINT_BASE}/${id}`, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, GET_USER);
  }
};
export const getUsers = () => async (dispatch) => {

  try {
    const response = await get(dispatch, GET_USERS, USER_ENDPOINT_BASE, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, GET_USER);
  }
};

// Store
const INITIAL_STATE = {
  ...buildGenericInitialState([GET_USER, GET_USERS]),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return updateStore(state, action, _.get(action, 'payload.user.id') ? { [action.payload.user.id]: action.payload.user } : {});
    case GET_USER:
    case GET_AUTHENTICATED_USER:
      return updateStore(state, action, _.get(action, 'payload') ? { user: action.payload } : {});
    case GET_USERS:
      return updateStore(state, action, _.get(action, 'payload.users') ? _.mapKeys(action.payload.users, 'id') : {});
    default:
      return state;
  }
};

// Selectors
export const getAuthenticatedUser = ({ user, authentication }) => user[authentication.user];
