import React, { Component } from 'react';
import axios from 'axios';
// import { 
	// FacebookLoginButton,
	// TwitterLoginButton,
	// GithubLoginButton,
	// GoogleLoginButton,
	// InstagramLoginButton,
// } from 'react-social-login-buttons';
// import SocialLogin from 'react-social-login';
import SocialButton from '../UI/Buttons/SocialButton';
import User from './User';
import { backendServerRootURL } from '../../config/constants';
import ChatWindow from '../ChatWindow/ChatWindow';
import Loading from '../UI/Loading/Loading';
import {connect} from 'react-redux';
import { setClient, unsetClient, uiStartLoading, uiStopLoading, addComment, setNotification, unsetNotificationInit } from '../../store/actions/index';
const $ = window.$;

class SingleChatWindow extends Component {

	constructor(props){
		super(props);

		this.nodes = {};
		this.handleSocialLogin = this.handleSocialLogin.bind(this);
		this.handleSocialLoginFailure = this.handleSocialLoginFailure.bind(this);
		this.handleSocialLogout = this.handleSocialLogout.bind(this);
		this.handleSocialLogoutFailure = this.handleSocialLogoutFailure.bind(this);
		this.handleSkipLoginForm = this.handleSkipLoginForm.bind(this);
		this.updateSkipLoginState = this.updateSkipLoginState.bind(this);
		this.logout = this.logout.bind(this);
		this.setClient = this.setClient.bind(this);
		this.isAdmin = this.isAdmin.bind(this);
		this.selectedChatUser = this.selectedChatUser.bind(this);
	}

	isAdmin(){
		// console.log('is admin running');
		// console.log(this.state.user.email, this.state.user.email.trim() == "devhammed@gmail.com");
		// console.log(this.state, this.s)
		return this.state.user ? (this.state.user.email == "devhammed@gmail.com" ? true : false) : false
	}

	selectedChatUser(){
		return this.state.user ? (this.state.user.selectedChatUser ? true : false) : false;
	}

	setNodeRef(provider, node){
		// console.log(provider, node);
		if(node) {
			this.nodes[ provider ] = node
		}
		console.log(this.nodes[provider]);
	}

	componentWillMount(){
		this.setState({
			currentProvider:null,
			user:null,
			token:null,
			message:"",
			messageFor: null,
			logged: false,
			isLoaded: false,
			isConnected: false,
			newUser: {
				name: {
					value: ""
				},
				email: {
					value: ""
				}
			},
			itsMe:0
		}, () => console.log(this.state,'ran chat window component will mount'));
		//get session from <meta name="csrf-token" content="{{ csrf_token() }}">
		// axios.get(backendServerRootURL+"api/secure/csrfToken")
		// 	.then(res => {
		// 		let meta = document.createElement('meta');
		// 		meta.name = "csrf-token";
		// 		meta.content = res.data._token;
		// 		console.log(res.data._token, meta);
		// 		document.getElementsByTagName('head')[0].appendChild(meta); 
		// 		console.log('CommentsController@getComments', res);
		// 		window.setCookie(res.data.sessionName, res.data.sessionID, 120);
		// 		window.setCookie("XSRF-TOKEN", res.data._token, 120);
		// 		console.log(window.getCookie('XSRF-TOKEN'));
		// 		axios.get(backendServerRootURL+"api/secure/csrfToken")
		// 			.then(res => console.log('second one ', res))
		// 	})
		// 	.catch(err => console.log(err))
	}

	handleSocialLogin (user) {
		console.log(user);
		// this.setState(prevState => {
		// 	return {
		// 		...prevState,
		// 		currentProvider: user._provider,
		// 		user.profile
		// 	}
		// })
		this.setClient(user.profile, user._provider, user._token);
	}

	handleSocialLoginFailure(err){
		console.log('loginFailure', err);
		// window.FB.getLoginStatus(res => console.log(res))
	}

	handleSocialLogout(){
		console.log('logged out from current profile and now unsetting profile');
		// window.FB.getLoginStatus(res => console.log('status after logout', res));
		this.setState( prevState => {
			return {
				...prevState,
				user: null,
				token: null,
				message:"",
				currentProvider: null,
				logged: false,
				isLoaded:false,
				isConnected:false,
				newUser: {
					name: {
						value: ""
					},
					email: {
						value: ""
					}
				},
				itsMe:0
			}
		}, () => console.log(this.state));
	}

	handleSocialLogoutFailure(err){
		console.log('logoutFailure', err);
	}
	logout () {
		const { logged, currentProvider } = this.state;
		// console.log(logged, currentProvider);
		if( logged && currentProvider ) {
			// console.log(this.nodes[currentProvider].props.triggerLogout);
			this.nodes[currentProvider].props.triggerLogout()
			console.log(this.nodes);
			// console.log(this.nodes[currentProvider].props.triggerLogout);
			// console.log(this.nodes[currentProvider].checkLoggedIn());
			this.nodes[currentProvider].props.triggerLogout()
			this.setState( prevState => {
				return {
					...prevState,
					user: null,
					token: null,
					message:"",
					currentProvider: null,
					logged: false,
					isLoaded:false,
					isConnected:false,
					newUser: {
						name: {
							value: ""
						},
						email: {
							value: ""
						}
					},
					itsMe:0
				}
			}, () => console.log(this.state));
			// if(currentProvider === 'google'){
			// 	// this.nodes[currentProvider].props.triggerLogout()
			// 	this.setState( prevState => {
			// 		return {
			// 			...prevState,
			// 			user: null,
			// 			token: null,
			// 			currentProvider: null,
			// 			logged: false,
			// 			isLoaded:false,
			// 			isConnected:false
			// 		}
			// 	}, () => console.log(this.state));
			// 	// document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://soghammed.github.io";
			// }else{
			// 	this.nodes[currentProvider].props.triggerLogout()
			// }
		} 
	}

	setClient(profile, currentProvider, token){
		const userComments = new Promise((resolve) => {
			// let url = "http://soghammed.ddns.net/api/soghammed.github.io/public/api/user/"+profile.id+"/comments";

			let url = "http://soghammed.ddns.net/api/soghammed.github.io/public/api/comments";
			axios.get(url)
				.then(res => {
					console.log('CommentsController@getComments', res);
					resolve(res);
				})
				.catch(err => console.log(err))
		})
		let comments = [];
		userComments.then(res => {
			// console.log(res);
			profile.comments = res.data;
			this.setState( prevState => {
				return {
					...prevState,
					user: profile,
					currentProvider: currentProvider,
					logged:true,
					message:"",
					isConnected: true,
					isLoaded:true,
					token: token,
					newUser: {
						name: {
							value: ""
						},
						email: {
							value: ""
						}
					},
					itsMe:0
				}
			}, () => {
				this.props.uiStopLoading();
				console.log('profile set', this.state)
			});			
		});
	}

	addComment(message){
		axios.post(backendServerRootURL+"api/comments/create", {
			message: message, user: this.state.user
		})
		.then(res => {
			// this.getComments();
			console.log('returned', res);
			this.setState(prevState => {
				return {
					...prevState,
					user:{
						...prevState.user,
						comments: prevState.user.comments.concat(res.data)
					}
				}
			}, () => {
				console.log('after adding new comment to state', this.state)
				$('#chatWindowScroller').animate({
					scrollTop: $("#chatWindowScroller").prop("scrollHeight")
				}, 0.2);
			})
		})
		.catch(err => console.log(err))
		// this.props.addComment(this.state.message, this.state.profile);
	}

	handleSkipLoginForm(e){
		e.preventDefault();
		//validate firstname and email then
		// console.log(backendServerRootURL);
		// axios.post(backendServerRootURL+"api/comments/create",{
		// 	name: this.state.newUser.name.value, email:this.state.newUser.email.value
		// })
		console.log(this.state.newUser);
		console.log($('meta[name="csrf-token"]').attr('content'));
		this.props.uiStartLoading();
		axios.post(backendServerRootURL+"api/user/create",{
			name: this.state.newUser.name.value, 
			email:this.state.newUser.email.value
			// headers: {
	  //       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	  //   }
		},{
			timeout: 2000,
		})
		.then(res => {
			// console.log()
			console.log(res.data)
			if(res.data.name != null && res.data.email != null){
				this.setState(prevState => {
					return {
						...prevState,
						user:	res.data
					}
				}, () => {
					//get comments
					axios.get(backendServerRootURL+"api/comments/"+this.state.user.id)
						.then(res => {
							console.log('comments fetched', res.data);
							this.setState(prevState => {
								return {
									...prevState,
									user: {
										...prevState.user,
										comments: res.data
									}
								}
							}, () => {
								console.log('state after comments fetched', this.state.user.comments);
								$('.modal-close').click();
								$('#chatWindowScroller').animate({
									scrollTop: $("#chatWindowScroller").prop("scrollHeight")
								}, 1000);
								this.props.uiStopLoading();
								// this.props.uiStopLoading();
							});
						})
						.catch(err => console.log(err))
					// console.log(this.state);
				});
			}
			// console.log(res);
		})
		.catch(err => {
			console.log(err);
			this.props.uiStopLoading();
			this.props.setNotification("Woops... we ran into an issue, please try again.");
		})
	}

	updateSkipLoginState(key, el){
		// console.log('element', el, el.target, el.target.value);
		let val = el.target.value;
		this.setState(prevState => {
			// console.log(el.target);
			// return ;
			return {
				...prevState,
				newUser:{
					...prevState.newUser,
					[key]: {
						...prevState.newUser[key],
						value: val
					}
				}
			}
		})
	}

	initSkipLoginModal(){
		if($('.modal').css('display') != "block"){
			$(document).ready(function(){
				$('.modal').modal();
			}) 
		}
	}
	render(){
		let clientID = 1;
		let themeMode = "light";
		let comments = this.state.user ? this.state.user.comments : null;
		let loading = 
			this.props.isLoading ? 
			(
				<Loading style={{position:"absolute", top:"50%", right:"50%", zIndex:1}}/>
			)
			:
			null
		console.log('render comments', comments);
		// let comments = [
			// 	{
			// 		id: 1,
			// 		by_userID: 1,
			// 		name: "mido",
			// 		comment: "Hi! how can I help you?",
			// 		owner:{
			// 			displayName: "mido"
			// 		}
			// 	}
		// ];
		let SignInModalView = (
			<div 
				id="skipLoginModal" 
				class="modal" 
				style={{
					maxWidth:"250px"
				}}>
				<div class="modal-content">
					<i style={{position:"absolute",right:"15px"}} className="material-icons modal-close">&#10539;</i>
					<h5>Let's Chat!</h5> 
					<form id="skipLoginForm" onSubmit={this.handleSkipLoginForm}>
						<div 
							className="input-field" 
							style={{
								
							}}>
							<input type="text" id="skipLoginName" class="validate" placeholder="First Name" value={this.state.newUser.name.value} onChange={(e) => this.updateSkipLoginState('name', e)}/>
							<label htmlFor="#skipLoginName">Please enter your name:</label>
							<span class="helper-text" data-error="&#10539;" data-success="&#10004;"></span>
						</div>
						<div 
							className="input-field"
							style={{

							}}>
							
							<input type="email" id="skipLoginEmail" class="validate" placeholder="Email" value={this.state.newUser.email.value} onChange={(e) => this.updateSkipLoginState('email', e)}/>
							<label htmlFor="skipLoginEmail">Please enter your email:</label>
							<span class="helper-text" data-error="&#10539;" data-success="&#10004;"></span>
						</div>
						<div className="input-field center">
							{
								this.props.isLoading 
								?
								(
									<Loading size="small" />
								)
								:
								(
									<button 
										className="btn-floating btn-small waves-effect waves-light" 
										style={{
											// backgroundColor:theme[themeMode].themeColor,
											// transform:"translate(10px,-25px)",
											backgroundColor:"black",
										}}
										type="submit"
										>
											<i className="material-icons" style={{backgroundColor:"#013233"}}>check</i>
									</button>
								)
							}
						</div>
						{/*<div className="input-field" style={{width:"90%"}}>
						  <i 
						  	className="material-icons prefix" 
						  	style={{
						  		// color:theme[themeMode].themeColor
						  		color: "#013233",
						  	}}>message</i>
						  <textarea 
						  	id="icon_prefix2" 
						  	className="materialize-textarea" 
						  	autoComplete="press"
						  	value={this.state.message}
						  	onChange={(e) => this.setState({message: e.target.value})}
						  	></textarea>
						  <label 
						  	htmlFor="icon_prefix2" 
						  	style={{
						  		color: "#lightgrey"
						  		// color:theme[themeMode].themeColor
						  	}}>
						  	Message
						  </label>
						</div>*/}
					</form>
				</div>
				{this.initSkipLoginModal()}
				{/*window.initSkipLoginModal()*/}
			</div>
		);
		let content = (
			<ChatWindow 
				user={this.state.user}
				addComment={this.addComment}
				isAdmin={this.isAdmin}
				backendServerRootURL={backendServerRootURL}
				selectedChatUser={this.selectedChatUser}/>
		);
		return(
			<div 
				id="chatWindowToggler"
				style={this.props.style}>
				{content}
				{SignInModalView}
				{loading}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		isLoading: state.ui.isLoading
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		setClient: (profile) => dispatch(setClient(profile)),
		unsetClient: () => dispatch(unsetClient()),
		uiStartLoading: () => dispatch(uiStartLoading()),
		uiStopLoading: () => dispatch(uiStopLoading()),
		addComment: (message, profile) => dispatch(addComment(message, profile)),
		setNotification: (message) => dispatch(setNotification(message)),
		unsetNotification: () => dispatch(unsetNotificationInit())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleChatWindow);