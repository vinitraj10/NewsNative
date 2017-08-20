import axios from 'axios';
import {
	FETCHING_NEWS_BNS,
	FETCHED_NEWS_BNS
} from '../types';

export function BnsNews(){
	const url = 'https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=729f45374a4c48b88ebfbc167def61d2';
	const request =  axios.get(url);
	return (dispatch) =>{
		dispatch({type:FETCHING_NEWS_BNS});
		request.then((response)=>{
			dispatch({type:FETCHED_NEWS_BNS,payload:response});
		});
	}
}