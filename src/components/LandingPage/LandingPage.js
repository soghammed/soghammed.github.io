import React, { Component } from 'react';
import { Renderer, Camera, Scene, MyCube } from 'react-threejs';
import axios from 'axios';
// import { About, ContactUs, LandingScreen, Projects, Styles } from './index';
import Navbar from '../UI/Navbar/Navbar';
import About from './About/About';
// import ContactUs from './ContactUs/ContactUs';
import LandingScreen from './LandingScreen/LandingScreen';
import Projects from './Projects/Projects';
import ChatWindow from '../ChatWindow/ChatWindow';
import SingleChatWindow from '../SingleChatWindow/SingleChatWindow';
import Notifications from '../UI/Notifications/Notifications';
import Styles from './Styles/Styles';
import { connect } from 'react-redux';
import { setNotification, unsetNotificationInit } from '../../store/actions/index';

const $ = window.$;
class LandingPage extends Component {
	
	//getToken and set it if it doesnt exist;
	constructor(props){
		super(props);
		this.state = {
			admin: false,
			adminCheckComplete:false,
			chatWindows: [],
			client: null,
		}
	}

	componentWillMount(){
		// this.getClient();
		// if(!this.state.adminCheckComplete){
		// 	let isAdmin = this.checkIsAdmin();
		// 	this.setState({
		// 		admin: isAdmin, 
		// 		adminCheckComplete: true
		// 	}, () => {
		// 		console.log('state after checkIsAdmin is done and state updated', this.state);
		// 		if(isAdmin){
		// 			this.getClients();
		// 		}
		// 	});
		// }
		// <meta name="csrf-token" content="{{ csrf_token() }}">
	}


	checkIsAdmin(){
		return true;
	}



	getClients(){

		axios.get('api/users')
			.then(res => console.log())
	}

	getClient(){
		if(localStorage.getItem('cname') && localStorage.getItem('cemail')){
			this.setState({
				client: {
					name: localStorage.get('cname'),
					email: localStorage.get('cemail')
				}
			}, () =>  console.log('after setting client name and email', this.state))
		}else{

		}
	}

	render(){
		let clients = null;
		let content = (
			<div 
				style={{
					minWidth:"900px"
				}}
				>
				<Styles/>
				<Navbar/>
				<div 
					className="content"
					style={{
						backgroundColor:"rgba(0,0,0,0.8)"
					}}>
					<LandingScreen scrollMeTo={window.scrollMeTo}/>
					<About scrollMeTo={window.scrollMeTo}/>
					<Projects scrollMeTo={window.scrollMeTo}/>
					<SingleChatWindow 
						style={{
							// border: "3px solid gold",
							position:"fixed",
							bottom:"0",
							right:"70px",
							// display:"none",
							// minHeight:"500px",
							maxHeight:"500px",
							minWidth:"30%",
							maxWidth:"420px",
						}}/>
					<Notifications info={this.props.nMessage} status={this.props.nStatus} dismiss={this.props.unsetNotification} />
					{/*	<ContactUs scrollMeTo={window.scrollMeTo}/>*/}
				</div>
			</div>
		);
		return (
			<div>
				{content}
				<div className="socialMediaStripe">
					<ul 
						id="socialMediaList" 
						style={{
							listStyleType: "none",
							backgroundColor:"rgba(0,0,0,0.5)",
							padding:"10px",
							width:"100%"}}>
						<li>
							<a 
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/mhammed">
								<i className="fab fa-linkedin fa-3x"></i>
							</a>
						</li>
						<li>
							<a 
								target="_blank" 
								rel="noopener noreferrer"
								href="https://github.com/soghammed">
								<i className="fab fa-github-square fa-3x"></i>
							</a>
						</li>
					</ul>
				</div>
				<a className="modal-trigger" href="#skipLoginModal" id="chatToggleIcon">
					<span 
						className="btn-floating btn-small waves-effect waves-light"
						style={{
							position: "fixed",
							bottom:"50%",
							right: "20px",
							backgroundColor:'rgba(1, 50, 51, 1)'
						}}
						onClick={() => {
							// $('#chatWindowToggler').toggle();
						}}>
						<i className="material-icons">chat_bubble</i>
					</span>
				</a>
				<span 
					className="btn-floating btn-small waves-effect waves-light"
					style={{
						position: "fixed",
						bottom:"20px",
						right: "20px",
						backgroundColor:'rgba(1, 50, 51, 1)'
					}}
					onClick={() => window.scrollMeTo()}>
					<i className="material-icons">arrow_upward</i>
				</span>
				<Renderer size={10}>
				    <Camera position={{ z: 5 }} />
				    <Scene>
				      <MyCube color={0x00ff00} rotation={1}>
				        <MyCube color={0xff0000} position={{ y: 2 }} />
				        <MyCube color={0x0000ff} position={{ z: 3 }} />
				      </MyCube>
				    </Scene>
			    </Renderer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.ui.isLoading,
		nMessage: state.notifications.message,
		nStatus: state.notifications.status
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		unsetNotification: () => dispatch(unsetNotificationInit())
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);