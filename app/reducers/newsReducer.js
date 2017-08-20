//importing Intialstate
//import intialState from './intialState';

//import action types
import {FETCHING_NEWS_BNS}  from '../actions'; 
import {FETCHED_NEWS_BNS}   from '../actions';
import {FETCHING_NEWS_ENT}  from '../actions';
import {FETCHED_NEWS_ENT}   from '../actions';
import {FETCHING_NEWS_HCKR} from '../actions';
import {FETCHED_NEWS_HCKR}  from '../actions';
import {FETCHING_NEWS_IND}  from '../actions';
import {FETCHED_NEWS_IND}   from '../actions';
import {FETCHING_NEWS_SPTS} from '../actions';
import {FETCHED_NEWS_SPTS}  from '../actions';
import {FETCHING_NEWS_WLD}  from '../actions';
import {FETCHED_NEWS_WLD}   from '../actions';

const intialState = {
	isFetching:false,
	isFetched:false,
	data:null,
};

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_NEWS_BNS:
			return {...state,isFetching:true};
			break;

		case FETCHED_NEWS_BNS:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data};
			break;

		case FETCHING_NEWS_ENT:
			return {...state,isFetching:true,isFetched:false};
			break;

		case FETCHED_NEWS_ENT:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;

		case FETCHING_NEWS_HCKR:
			return {...state,isFetching:true,isFetched:false};
			break;

		case FETCHED_NEWS_HCKR:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;

		case FETCHING_NEWS_IND:
			return {...state,isFetching:true,isFetched:false};
			break;

		case FETCHED_NEWS_IND:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;

		case FETCHING_NEWS_SPTS:
			return {...state,isFetching:true,isFetched:false};
			break;
		case FETCHED_NEWS_SPTS:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;
		case FETCHING_NEWS_WLD:
			return {...state,isFetching:true,isFetched:false};
			break;
		case FETCHED_NEWS_WLD:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;
	}
	return state;
}