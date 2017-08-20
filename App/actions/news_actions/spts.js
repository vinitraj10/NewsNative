import axios from 'axios';
import {
	FETCHING_NEWS_SPTS,
	FETCHED_NEWS_SPTS
} from '../types';

export function  SptsNews(){
	const url = 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=729f45374a4c48b88ebfbc167def61d2';
	const request =  axios.get(url);
	return (dispatch) =>{
		dispatch({type:FETCHING_NEWS_SPTS});
		request.then((response)=>{
			dispatch({type:FETCHED_NEWS_SPTS,payload:response});
		});

	}
}