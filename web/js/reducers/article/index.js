import { combineReducers } from 'redux';
import status from './status.js';
import view from './view.js';
import data from './data.js';

const article = combineReducers({
  status,
  view,
  data
});

export default article;
