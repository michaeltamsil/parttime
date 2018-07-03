import { APP_NAMESPACE } from './redux-constants';
const typeBase = `${APP_NAMESPACE}/`;
const ENDPOINT_BASE = 'api/';

// API
export const EVENTS = ENDPOINT_BASE+'events';
export const CITIES = ENDPOINT_BASE+'cities';

// get
export const GET_EVENTS = `${typeBase}GET_EVENTS`;
export const GET_ALLEVENTS = `${typeBase}GET_ALLEVENTS`;
export const GET_EVENTSBYID = `${typeBase}GET_EVENTSBYID`;
export const GET_CITIES = `${typeBase}GET_CITIES`;

//post
export const POST_EVENTS = `${typeBase}POST_EVENTS`;

//put
export const PUT_EVENTS = `${typeBase}PUT_EVENTS`;
