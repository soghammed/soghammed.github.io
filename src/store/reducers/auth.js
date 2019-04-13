import { SET_CLIENT, UNSET_CLIENT } from '../actions/actionTypes';

const initialState = {
	client:{
		provider: null,
		profile: null,
		status: null
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case SET_CLIENT:
			return {
				...state,
				client:{
					provider: action.provider,
					profile: action.profile,
					status: action.status
				}
			}
			break;

		case UNSET_CLIENT:
			return {
				...state,
				client:{
					provider: null,
					profile: null,
					status: null
				}
			}
			break;

		default:
			return state;
	}
}

export default reducer;