import { SET_NOTIFICATION, UNSET_NOTIFICATION } from './actionTypes';

export const setNotification = (message, status = 1) => {
	return {
		type: SET_NOTIFICATION,
		message: message,
		status: status
	}
}


export const unsetNotificationInit = (message = null) => {
	return (dispatch, getState) => {
		console.log('unseTNiotInit with args', getState().notifications.status, message);
		if(getState().notifications.status || (message != null || message != '')){
			console.log('unsettingNotifcation');
			dispatch(unsetNotification());
			if(message){
				console.log('seting new message notificaion');
				console.log(message);
				setTimeout(() => dispatch(setNotification(message, 1)), 1000);
			}
		}
	}
}

export const unsetNotification = () => {
	return {
		type: UNSET_NOTIFICATION
	}
}