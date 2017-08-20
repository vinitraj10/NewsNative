import axios from 'axios';
import {
	FETCHING_NEWS_WLD,
	FETCHED_NEWS_WLD
} from '../types';


export function WldNews(){
	const url = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=729f45374a4c48b88ebfbc167def61d2';
	const request =  axios.get(url);
	return (dispatch) =>{
		dispatch({type:FETCHING_NEWS_WLD});
		request.then((response)=>{
			dispatch({type:FETCHED_NEWS_WLD,payload:response});
		});
	}
}