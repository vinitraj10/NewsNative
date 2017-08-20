import {FETCHING_NEWS_ENT} from '../actions';
import {FETCHED_NEWS_ENT} from '../actions';
import {ERROR_ENT} from '../actions';

const intialState = {
	isFetching:false,
	isFetched:false,
	data:[]
};

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_NEWS_ENT:
			return {...state,isFetching:true};
			break;
		case FETCHED_NEWS_ENT:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;
		case ERROR_ENT:
			return {...state,isFetching:false,isFetched:false,error:action.payload}
	}
	return state;
}