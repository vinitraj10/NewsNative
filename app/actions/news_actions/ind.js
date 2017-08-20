import axios from 'axios';
import {
	FETCHING_NEWS_IND,
	FETCHED_NEWS_IND
} from '../types';

export function IndNews(){
	const url = 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=729f45374a4c48b88ebfbc167def61d2';
	const request =  axios.get(url);
	return (dispatch) =>{
		dispatch({type:FETCHING_NEWS_IND});
		request.then((response)=>{
			dispatch({type:FETCHED_NEWS_IND,payload:response});
		});

	}
}