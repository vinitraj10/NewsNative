import axios from 'axios';
import {
	FETCHING_NEWS_ENT,
	FETCHED_NEWS_ENT
} from '../types';

export function EntNews(){
	const url = 'https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=729f45374a4c48b88ebfbc167def61d2';
	const request =  axios.get(url);
	return (dispatch) =>{
		dispatch({type:FETCHING_NEWS_ENT});
		request.then((response)=>{
			dispatch({type:FETCHED_NEWS_ENT,payload:response});
		});
	}
}