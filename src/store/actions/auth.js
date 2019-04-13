import { UNSET_CLIENT } from './actionTypes';

export const setClient = (profile) => {
	return dispatch => {
		console.log('setClient', profile);
	}
}

export const unsetClient = () => {
	console.log('unsetClient');
	return {
		type: UNSET_CLIENT,
	}
}