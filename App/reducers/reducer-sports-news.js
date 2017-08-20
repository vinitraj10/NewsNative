import {FETCHING_NEWS_SPTS} from '../actions';
import {FETCHED_NEWS_SPTS} from '../actions';
import {ERROR_SPTS} from '../actions';

const intialState = {
	isFetching:false,
	isFetched:false,
	data:[]
};

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_NEWS_SPTS:
			return {...state,isFetching:true};
			break;
		case FETCHED_NEWS_SPTS:
			return {...state,isFetching:false,isFetched:true,data:action.payload.data}
			break;
		case ERROR_SPTS:
			return {...state,isFetching:false,isFetched:false,error:action.payload}
	}
	return state;
}