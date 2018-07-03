import _ from 'lodash';
import { EVENTS, POST_EVENTS, GET_ALLEVENTS, GET_EVENTS, GET_EVENTSBYID  } from '../../helpers/manifests';
import { put, post, get, del } from '../../helpers/http-utils';
import { updateStore, buildGenericInitialState, handleError } from '../../helpers/store-utils';
const queryString = require('query-string');

export const add = formData => async (dispatch) => {
  let data = new FormData();
  data.append('title', formData.title);
  data.append('location', formData.location);
  data.append('startdate', formData.startdate);
  data.append('enddate', formData.enddate);
  data.append('description', formData.description);
  data.append('totalticket', formData.totalticket);
  data.append('city_id', formData.city_id);
  data.append('litle_description', formData.litle_description);
  data.append('fulladdress', formData.fulladdress);
  data.append('image', formData.image[0]);
  try {
    const response = await post(dispatch, POST_EVENTS, EVENTS, data, true, true);
    if (response) {
      return Promise.resolve(response);
    }
  } catch (err) {
    await handleError(dispatch, err, POST_EVENTS);
  }
};

export let getAll = () => async (dispatch) => {
  try {
    const response = get(dispatch, GET_ALLEVENTS, `${EVENTS}`, true, true);
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    await handleError(dispatch, err, GET_EVENTS);
  }
};

export let getLimit5 = () => async (dispatch) => {
  try {
    const response = get(dispatch, GET_EVENTS, `${EVENTS}/limit5`, true, true);
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    await handleError(dispatch, err, GET_EVENTS);
  }
};

export let getUrl = (url) => async (dispatch) => {
  try {
    const response = get(dispatch, GET_EVENTSBYID, `${EVENTS}/${url}`, true, true);
    return Promise.resolve(response);
  } catch (err) {
    console.log(err);
    await handleError(dispatch, err, GET_EVENTSBYID);
  }
};

// Store
const INITIAL_STATE = {
  ...buildGenericInitialState([POST_EVENTS, GET_EVENTS, GET_ALLEVENTS, GET_EVENTSBYID])
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_EVENTS:
      return updateStore(state, action, { data: _.get(action, 'payload') });
    case GET_EVENTS:
      return updateStore(state, action, { data: _.get(action, 'payload') });
    case GET_ALLEVENTS:
      return updateStore(state, action, { data: _.get(action, 'payload') });
    case GET_EVENTSBYID:
      return updateStore(state, action, { databyid: _.get(action, 'payload') });
    default:
      return state;
  }
};
