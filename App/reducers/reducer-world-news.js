import {FETCHING_NEWS_WLD} from '../actions';
import {FETCHED_NEWS_WLD} from '../actions';
import {ERROR_WLD} from '../actions';

const intialState = {
	isFetching:false,
	isFetched:false,
	data:[],
	error:null
};

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_NEWS_WLD:
			return {...state,isFetching:true};
			break;
		case FETCHED_NEWS_WLD:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;
		case ERROR_WLD:
			return {...state,isFetching:false,isFetched:false,error:action.payload}
	}
	return state;
}