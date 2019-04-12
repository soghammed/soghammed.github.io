import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import LandingPage from './components/LandingPage/LandingPage';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import configStore from './store/configStore';
import { Provider, connect } from 'react-redux'; 

if (document.getElementById('root')) {
    // (async init  => {
    //     const store = await configStore();
    //     // console.log(store.getState());
    //     ReactDOM.render(
    //         <Provider store={store}>
    //             <App />
    //         </Provider>, document.getElementById('app'));
    // })();
    ReactDOM.render(
        <Provider store={configStore()}>
            <LandingPage />
        </Provider>, document.getElementById('root'));
}    

// ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
