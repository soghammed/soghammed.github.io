import { SET_NOTIFICATION, UNSET_NOTIFICATION } from '../actions/actionTypes';
const initialState = {
	message: null,
	status: 0,
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case SET_NOTIFICATION:
			return {
				...state,
				status: action.status,
				message: action.message,
			}

		case UNSET_NOTIFICATION: 
			return {
				...state,
				status: 0,
				message: null
			}
			
		default:
			return state;
	}
}

export default reducer;