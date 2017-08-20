import axios from 'axios';
import {
	FETCHING_NEWS_HCKR,
	FETCHED_NEWS_HCKR
} from '../types';

export function HckrNews(){
	const url = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=729f45374a4c48b88ebfbc167def61d2';
	const request =  axios.get(url);
	return (dispatch) =>{
		dispatch({type:FETCHING_NEWS_HCKR});
		request.then((response)=>{
			dispatch({type:FETCHED_NEWS_HCKR,payload:response});
		});

	}
}