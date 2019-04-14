import React, { Component } from 'react';
// import axios from 'axios';
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
// import Loading from '../UI/Loading/Loading';
import {connect} from 'react-redux';
import { setClient, unsetClient, uiStartLoading, uiStopLoading, addComment } from '../../store/actions/index';
class ChatWindow extends Component {

	constructor(props){
		super(props);

		this.nodes = {};

		this.handleSocialLogin = this.handleSocialLogin.bind(this);
		this.handleSocialLoginFailure = this.handleSocialLoginFailure.bind(this);
		this.handleSocialLogout = this.handleSocialLogout.bind(this);
		this.handleSocialLogoutFailure = this.handleSocialLogoutFailure.bind(this);
		this.logout = this.logout.bind(this);
		this.setClient = this.setClient.bind(this);
	}
	setNodeRef(provider, node){
		// console.log(provider, node);
		if(node) {
			this.nodes[ provider ] = node
		}
		console.log(node);
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
			isConnected: false
		});
		console.log('ran chat window component will mount');
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
				currentProvider: null,
				logged: false,
				isLoaded:false,
				isConnected:false
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
			console.log(this.nodes[currentProvider].props.triggerLogout);
			this.nodes[currentProvider].props.triggerLogout()
			console.log(this.nodes);
			// console.log(this.nodes[currentProvider].props.triggerLogout);
			// console.log(this.nodes[currentProvider].checkLoggedIn());
			if(currentProvider === 'google'){
				// this.nodes[currentProvider].props.triggerLogout()
				this.setState( prevState => {
					return {
						...prevState,
						user: null,
						token: null,
						currentProvider: null,
						logged: false,
						isLoaded:false,
						isConnected:false
					}
				}, () => console.log(this.state));
				// document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://soghammed.github.io";
			}else{
				this.nodes[currentProvider].props.triggerLogout()
			}
		} 
	}

	setClient(profile, currentProvider, token){
		this.setState( prevState => {
			return {
				...prevState,
				user: profile,
				currentProvider: currentProvider,
				logged:true,
				isConnected: true,
				isLoaded:true,
				token: token
			}
		}, () => {
			this.props.uiStopLoading();
			console.log('profile set', this.state)
		});
	}

	addComment(){
		this.props.addComment(this.state.message, this.state.profile);
	}

	render(){
		let clientID = 1;
		let themeMode = "light";
		let comments = null;

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
		let content = (
			<div 
				id="chatWindow"
				className="card"
				style={{
					margin:0,
				}}
				onClick={
					(el) => {
						console.log(el.target.className);
						if(el.target.className.includes('card-header')){
							window.toggleChatWindow()
						}
					}
				}>
				<div 
					className="card-header center"
					style={{
						color:"white",
						cursor:"pointer",
						padding:"10px",
						backgroundColor:"#013233"
					}}>
					Powered by&nbsp;
					<span 
						style={{
							color:"gold",
							fontWeight:"bolder",
						}}>
						S.O.G
					</span>
					&nbsp;with&nbsp;
					<span
						style={{
							color:"red",
							fontWeight:"bolder",
						}}>
						&#10084;
					</span>
					<div>
						<i 
							className="dropdown-trigger material-icons"
							data-target='dropdown1'
							style={{
								position:"absolute",
								right:"7px",
								top:"7px"
							}}>
							account_circle
						</i>
						<ul 
							id='dropdown1' 
							className='dropdown-content'>
							<li onClick={() => this.logout() }>
								<a href="#test">
									<i className="material-icons">exit_to_app</i>
								</a>
							</li>
						</ul>
					</div>
					{window.initLogoutDropdown()}

					{ 
						// this.state.profile ? window.initLogoutDropdown() : null
					}
				</div>
				<div id="chatWindowBody" style={{display:"none"}}>
					{
						//if comments exist show container else show login
						this.state.user  ? 
						(
							<div>
								<div 
								className="card-body"
								style={{
									marginTop:"20px",
									position:"relative",
									minHeight:"300px",
									maxHeight:"400px",
									overflowY:"scroll",
									padding:"0 10px",
									borderRadius:"20px",
									// padding:"40px",
								}}>
									{/* animate first message as tho am typing then send */}
									<div
										className="card hoverable"
										style={{
											backgroundColor: "rgba(255,255,255,1)",
											padding:"20px",
											// margin:"10px 0 20px",
											display:'inline-block',
											maxWidth:"100%",
											overflowWrap:"break-word",
											// float:this.props.client.id == comment.by_userID ? "right" : "left",
											float:"right",
											boxShadow:"0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
										}}>
										<b>S.O.G</b>
										<div>
											Hi! How can i help you?
										</div>
									</div>
									{
										comments ? 
										comments.map(comment => {
											let commentView = (
												<div
													className="card hoverable"
													style={{
														backgroundColor: clientID === comment.by_userID ? "rgba(255,255,255,1)" : "gold",
														padding:"20px",
														// margin:"10px 0 20px",
														display:'inline-block',
														maxWidth:"100%",
														overflowWrap:"break-word",
														// float:this.props.client.id == comment.by_userID ? "right" : "left",
														float:clientID === comment.by_userID ? "right" : "left",
														boxShadow:"0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
													}}>
													<div 
														style={{
															// color:themeMode == "dark" ?
															// "#ffbf00" 
															// : 
															// "#eee", 
															// fontWeight:"bold"
														}}>
														<b>
														{comment.by_userID === clientID ? "" : comment.owner.displayName}
														</b>
													</div>
													<div style={{color:themeMode === "dark" ? "#eee" : "#2d2d2d",whiteSpace: "pre-wrap"}}>
														{comment.comment}
													</div>

												</div>
											);
											return commentView;
										})
										:
										null
									}
								</div>
								<div 
									id="newChatCommentContainer"
									style={{
										margin:"0 10px"
									}}>
									<div className="input-field" style={{display:"inline-block",width:"90%"}}>
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
							        </div>
							        <button 
							        	className="btn-floating btn-small waves-effect waves-light" 
							        	style={{
							        		// backgroundColor:theme[themeMode].themeColor,
							        		transform:"translate(10px,-25px)",
							        		backgroundColor:"black",
							        	}}
							        	// onClick={() => this.addComment()}
							        	><i className="material-icons" style={{backgroundColor:"#013233"}}>check</i></button>	
								</div>
							</div>
						)
						:
						(
							<div 
								id="loginInWindow"
								style={{
									padding:"40px"
								}}>
								<div className="center">
									{
										// <div className="fb-login-button" data-size="medium" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div>
										<SocialButton 
											provider="facebook"
											appId="375823176606290"
											// autoLogin={true}
											onLoginSuccess={this.handleSocialLogin}
											onLoginFailure={this.handleSocialLoginFailure}
											onLogoutSuccess={this.handleSocialLogout}
											onLogoutFailure={this.handleSocialLogoutFailure}
											getInstance={this.setNodeRef.bind(this, 'facebook')}
											key={'facebook'}
											logged={this.state.logged}
											socialsite="facebook"
											setClient={this.setClient}
											uiStartLoading={this.props.uiStartLoading}
											uiStopLoading={this.props.uiStopLoading}
											isLoading={this.props.isLoading}
											scope="public_profile,name,email,profilePicURL"
											/>
									}
									{/*<SocialButton  
									 	provider="google"
									 	appId="1040584838630-pf5ubddagk3bo898q6iubktr3hd6u4k4.apps.googleusercontent.com"
									 	onLoginSuccess={this.handleSocialLogin}
									 	onLoginFailure={this.handleSocialLoginFailure}
									 	socialsite="google"
									 	setClient={this.setClient}
									 	uiStartLoading={this.props.uiStartLoading}
									 	uiStopLoading={this.props.uiStopLoading}/>
										<SocialButton
											provider="instagram"
											appId="929923068b2d46a2b6d8cd37d388c5ac"
											onLoginSuccess={this.handleSocialLogin}
											onLoginFailure={this.handleSocialLoginFailure}
											onLogoutSuccess={this.handleSocialLogout}
											onLogoutFailure={this.handleSocialLogoutFailure}
											getInstance={this.setNodeRef.bind(this, 'instagram')}
											socialsite='instagram'
											setClient={this.setClient}
											uiStartLoading={this.props.uiStartLoading}
											uiStopLoading={this.props.uiStopLoading}
											isLoading={this.props.isLoading}
										/>*/}
								</div>
							</div>
						)
					
					}
				</div>
			</div>
		);
		// let content = (
		// 	<div
		// 		style={{
		// 			border:"3px solid gold"
		// 		}}>
		// 		<div 
		// 			id="ticketCommentsContainer" style={{position:"relative",minHeight:"200px",maxHeight:"300px",overflowY:"scroll",padding:"0 10px",borderRadius:"20px"}}>
		// 			{
		// 				comments ? 
		// 				comments.map(comment => {
		// 					let commentsview = (
		// 						<div key={comment.id} className="row" style={{margin:0}}>
		// 							<div className="col-s12">
		// 								<div 
		// 									className="card commentContainer hoverable" 
		// 									style={{
		// 										backgroundColor: this.props.client.id == comment.by_user_id ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
		// 										margin:"10px 0 20px",
		// 										display:'inline-block',
		// 										maxWidth:"100%",
		// 										overflowWrap:"break-word",
		// 										float:this.props.client.id == comment.by_user_id ? "right" : "left",
		// 										// boxShadow:"0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
		// 									}}>
		// 									<div 
		// 										style={{
		// 											color:themeMode == "dark" ?
		// 											"#ffbf00" 
		// 											: 
		// 											"#eee", 
		// 											fontWeight:"bold"
		// 										}}>
		// 										<b>
		// 										{comment.by_user_id == this.props.client.id ? "" : comment.owner.displayName}
		// 										</b>
		// 									</div>
		// 									<div style={{color:themeMode == "dark" ? "#eee" : "#2d2d2d",whiteSpace: "pre-wrap"}}>
		// 										{comment.comment}
		// 									</div>
		// 										{/* &nbsp;<i className="fas fa-user">{comment.owner.displayName}</i> */}
		// 								</div>
		// 							</div>
		// 						</div>
		// 					);
		// 					return commentsview;
		// 				})
		// 				:
		// 				null
		// 			}
		// 		</div>
		// 	</div>
		// );
		return(
			<div 
				style={{
					// border: "3px solid gold",
					position:"fixed",
					bottom:0,
					right:"70px",
					// minHeight:"500px",
					maxHeight:"500px",
					minWidth:"380px",
				}}>
				{content}
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
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);