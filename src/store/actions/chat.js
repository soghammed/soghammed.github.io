// import { ADD_COMMENT } from 'actionTypes';
import axios from 'axios';

export const addComment = (message, profile) => {
	return dispatch => {
		// const proxyurl = "https://cors-anywhere.herokuapp.com/";
		axios.post('http://soghammed.ddns.net/api/soghammed.github.io/public/api/comments/create', {
			data: {message: message, profile: profile},
		})
		.then(res => console.log(res))
		//{
		//	method: 'post',
		//	url: 'api/comments/create',
		//	data: {message: message, profile: profile}
		//}
		// .then(res => console.log(res))
		// .error(err => console.log(err))
	}
}