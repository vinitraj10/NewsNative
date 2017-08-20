import {combineReducers} from 'redux';
//Our reducers for every News tags.
import BuisnessNewsReducer from './reducer-buisness-news';
import EntertainmentNewsReducer from './reducer-entertainment-news';
import HackerNewsReducer from './reducer-hacker-news';
import IndiaNewsReducer from './reducer-india-news';
import SportsNewsReducer from './reducer-sports-news';
import WorldNewsReducer from './reducer-world-news';

const rootReducer = combineReducers({
	bns: BuisnessNewsReducer,
	ent: EntertainmentNewsReducer,
	hckr: HackerNewsReducer,
	ind: IndiaNewsReducer,
	spts: SportsNewsReducer,
	wld: WorldNewsReducer
});

export default rootReducer;