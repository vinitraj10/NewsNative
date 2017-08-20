import axios from 'axios';

//BNS
export const FETCHING_NEWS_BNS = 'FETCHING_NEWS_BNS';
export const FETCHED_NEWS_BNS = 'FETCHED_NEWS_BNS';
//export const ERROR_BNS = 'ERROR_BNS';

//ENT
export const FETCHING_NEWS_ENT = 'FETCHING_NEWS_ENT';
export const FETCHED_NEWS_ENT = 'FETCHED_NEWS_ENT';
//export const ERROR_ENT = 'ERROR_ENT';

//HCKR
export const FETCHING_NEWS_HCKR = 'FETCHING_NEWS_HCKR';
export const FETCHED_NEWS_HCKR = 'FETCHED_NEWS_HCKR';
//export const ERROR_HCKR = 'ERROR_HCKR';

// IND
export const FETCHING_NEWS_IND = 'FETCHING_NEWS_IND';
export const FETCHED_NEWS_IND = 'FETCHED_NEWS_IND';
//export const ERROR_IND = 'ERROR_IND';

//SPTS
export const FETCHING_NEWS_SPTS = 'FETCHING_NEWS_SPTS';
export const FETCHED_NEWS_SPTS = 'FETCHED_NEWS_SPTS';
//export const ERROR_SPTS = 'ERROR_SPTS';

// WLD
export const FETCHING_NEWS_WLD = 'FETCHING_NEWS_WLD';
export const FETCHED_NEWS_WLD = 'FETCHED_NEWS_WLD';
//export const ERROR_WLD = 'ERROR_WLD';

//Business

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

//Entertainment

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

//Hacker

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

//India

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

// Sports

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

// World

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