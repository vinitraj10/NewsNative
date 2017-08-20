import {combineReducers} from 'redux';
//Our reducers for every News tags.
import news from './newsReducer';

const rootReducer = combineReducers({
	news:news
});

export default rootReducer;