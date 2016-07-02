import { combineReducers } from 'redux';
import status from './status.js';
import data from './data.js';

const article = combineReducers({
  status,
  data
});

export default article;
