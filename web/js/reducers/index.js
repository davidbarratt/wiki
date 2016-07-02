import { combineReducers } from 'redux';
import article from './article/index.js';

const wiki = combineReducers({
  article
});

export default wiki;
