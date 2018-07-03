import _ from 'lodash';
import { CITIES, GET_CITIES } from '../../helpers/manifests';
import { put, post, get, del } from '../../helpers/http-utils';
import { updateStore, buildGenericInitialState, handleError } from '../../helpers/store-utils';
const queryString = require('query-string');
/**
 *
 * @returns {Promise}
 */
export let GetAllCities = () => async (dispatch) => {
  try {
    const response = get(dispatch, GET_CITIES, `${CITIES}`, true, true);
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    await handleError(dispatch, err, GET_CITIES);
  }
};

// Store
const INITIAL_STATE = {
  ...buildGenericInitialState([GET_CITIES])
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CITIES:
      return updateStore(state, action, { data: _.get(action, 'payload') });
    default:
      return state;
  }
};
