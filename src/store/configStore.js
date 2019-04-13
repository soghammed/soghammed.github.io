import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
	ui: uiReducer
});
	
const composerEnhancer = composeWithDevTools({
    name: `Redux`,
    realtime: true,
    trace: true,
    traceLimit: 25
});
// if(__DEV__){
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// }

const configStore = () => {
	return createStore(
		rootReducer,
		composerEnhancer( applyMiddleware(thunk))
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	// return createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ));
}
// const configStore = () => {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			const store = createStore(
// 				rootReducer,
// 				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()	
// 			)
// 			resolve(store);
// 		} catch (e) {
// 			reject(e);
// 		}
// 	});
// 	// return createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ));
// }

export default configStore;