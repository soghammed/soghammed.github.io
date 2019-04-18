import React, { Component } from 'react';
import axios from 'axios';
const $ = window.$;

class ChatWindow extends Component {


	constructor(props){
		super(props);
		this.state = {
			message: "",
			usersListLoaded: false,
			selectedChatUser: false,
		}

		this.deselectChatUser = this.deselectChatUser.bind(this);
	}

	getChatUsersList(){
		let r = false;
		if(!this.state.usersListLoaded){
			axios.get(this.props.backendServerRootURL+'api/users')
				.then(res => {
					this.props.user.usersList = res.data;
					this.setState({ usersListLoaded: true}, () => {
						console.log(this.props.user.usersList, this.state);
					})
				})
				.catch(err => console.log(err))
		}

		return r;
	}

	deselectChatUser(){
		this.props.user.selectedChatUser = null;
		this.setState({selectedChatUser: false});
	}

	selectChatUser(uid){
		// this.props.user.selectChatUser = 
		console.log('running');
		this.props.user.selectedChatUser = this.props.user.usersList.find((user) => {
				// console.log(user.id, uid, user.id == (uid), user);
			return user.id == uid;
		});
		//find and update the correct comments to display then update selectedChatUser
		axios.get(this.props.backendServerRootURL+'api/comments/'+this.props.user.selectedChatUser.id)
			.then( res => {
				this.props.user.comments = res.data;
				this.setState({selectedChatUser: true})
			})
			.catch(err => console.log(err))
		// this.props.user.comments = this.props.user.comments.filter(comment => {
		// 	console.log(comment.from.id, comment.to.id, uid);
		// 	return comment.from.id == uid || comment.to.id == uid
		// });

		// console.log(result);
		// this.props.user.selectedChatUser = this.props.user.usersList.find(uid);
		// console.log(this.props.user.selectedChatUser);
		console.log(this.props);
	}

	render(){
		console.log('rendering');
		let client = this.props.user ? this.props.user : null;
		let isAdmin = this.props.isAdmin();
		let chatUsersList = isAdmin ? this.getChatUsersList() : null

		let themeMode = this.props.themeMode;
		let comments = client ? client.comments : null;
		let liveChatWindowView = (
			<div>
				<div 
					id="chatWindowScroller"
					className="card-body"
					style={{
						marginTop:"20px",
						position:"relative",
						minHeight:"300px",
						maxHeight:"300px",
						overflowY:"scroll",
						padding:"0 10px",
						// borderRadius:"20px",
						// padding:"40px",
					}}>
					{/* animate first message as tho am typing then send */}
					{/*<div
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
					</div>*/}
					{
						comments ? 
						comments.map(comment => {
							let commentView = (
								<div key={comment.id} className="row" style={{margin:0}}>
									<div className="col-s12">
										<div
											id={"commentCard"+comment.id} 
											className="card hoverable"
											style={{
												backgroundColor: client.id === comment.user_id ? "rgba(255,255,255,1)" : "gold",
												padding:"10px 10px",
												// margin:"10px 0 20px",
												// display:'inline-block',
												maxWidth:"100%",
												overflowWrap:"break-word",
												// float:this.props.client.id == comment.by_userID ? "right" : "left",
												float:client.id === comment.user_id ? "right" : "left",
												boxShadow:"0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
											}}>
											{/*<div 
												style={{
													// color:themeMode == "dark" ?
													// "#ffbf00" 
													// : 
													// "#eee", 
													// fontWeight:"bold"
												}}>
												<b>
												{comment.user_id === clientID ? "" : comment.from.name}
												</b>
											</div>*/}
											<div style={{color:themeMode === "dark" ? "#eee" : "#2d2d2d",whiteSpace: "pre-wrap"}}>
												{comment.comment}
											</div>

										</div>
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
			        	onClick={() => this.props.addComment(this.state.message)}
			        	><i className="material-icons" style={{backgroundColor:"#013233"}}>check</i></button>	
				</div>
			</div>
		);
		let loginChatWindowView = (
			<div 
				id="loginInWindow"
				style={{
					padding:"40px"
				}}>
				{/*<div className="fb-login-button" data-size="medium" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div> */}
				<div className="center">
					<a 
						class="waves-effect waves-light btn-small modal-trigger" href="#skipLoginModal">
						<i 
							class="material-icons left">chat</i>
						Let's Chat!
					</a>
					{/*<SocialButton 
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
					<SocialButton 
						provider="twitter"
						appId="16234044"
						// autoLogin={true}
						onLoginSuccess={this.handleSocialLogin}
						onLoginFailure={this.handleSocialLoginFailure}
						onLogoutSuccess={this.handleSocialLogout}
						onLogoutFailure={this.handleSocialLogoutFailure}
						getInstance={this.setNodeRef.bind(this, 'twitter')}
						key={'twitter'}
						logged={this.state.logged}
						socialsite="twitter"
						setClient={this.setClient}
						uiStartLoading={this.props.uiStartLoading}
						uiStopLoading={this.props.uiStopLoading}
						isLoading={this.props.isLoading}
						scope="public_profile,name,email,profilePicURL"
						/>
					<SocialButton
						provider="github"
						appId="eb1c0e5a776dd036364a"
						onLoginSuccess={this.handleSocialLogin}
						onLoginFailure={this.handleSocialLoginFailure}
						onLogoutSuccess={this.handleSocialLogout}
						onLogoutFailure={this.handleSocialLogoutFailure}
						getInstance={this.setNodeRef.bind(this, 'github')}
						key={'github'}
						logged={this.state.logged}
						socialsite="github"
						setClient={this.setClient}
						uiStartLoading={this.props.uiStartLoading}
						uiStopLoading={this.props.uiStopLoading}
						isLoading={this.props.isLoading}/>
					<SocialButton  
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
		);
		let adminChatUsersListView = 
			this.props.user ?
			this.state.usersListLoaded ?
			(
				<div>
					<div 
						class="card-body collection"
						style={{
						position:"relative",
						minHeight:"300px",
						maxHeight:"410px",
						overflowY:"scroll",
						margin:"0 0 0 7px",
						borderLeft:"none",
						padding:0
						// padding:"0 10px",
						// borderRadius:"20px",
						// padding:"40px",
					}}>
						{
							this.props.user.usersList.map(user => {
								// console.log('ke')
								return (
									<a
										href="#!" 
										id={user.id} 
										class="collection-item" 
										style={{
											cursor:"pointer"
										}}
										onClick={(e) => this.selectChatUser(e.target.id)}>{user.name}</a>
								);
							})

						}
					</div>
				</div>
			)
			:
			null
			:
			null

		let content = 
			client ? 
			isAdmin ? 
			this.props.selectedChatUser() ?
			liveChatWindowView
			:
			adminChatUsersListView
			:
			liveChatWindowView
			:
			loginChatWindowView
		console.log('chat window displayed props:', this.props, isAdmin, adminChatUsersListView);
		return(
			<div 
				id="chatWindow"
				className="card"
				style={{
					margin:0,
				}}
				>
				<div 
					className="card-header center"
					style={{
						color:"white",
						cursor:"pointer",
						padding:"10px",
						backgroundColor:"#013233"
					}}
					onClick={
						(el) => {
							if(el.target.className.includes('card-header')){
								window.toggleChatWindow()
							}
						}
					}>
					{
						this.props.user ?
						this.props.user.selectedChatUser ?
						(
							<div 
								style={{
									position:"absolute"
								}}>
								<i class="material-icons" style={{cursor:"pointer"}} onClick={this.deselectChatUser}>arrow_back</i>
							</div>
						)
						:
						null
						:
						null
					}
					

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

					<div
						style={{
							position:"absolute",
								right:"25px",
								top:"7px"
						}}>
						<i 
							className="dropdown-trigger material-icons"
							data-target='dropdown1'
							style={{
								// position:"absolute",
								// right:"7px",
								// top:"7px"/
							}}>
							account_circle
						</i>
						<ul 
							id='dropdown1' 
							className='dropdown-content'>
							<li 
								// onClick={() => this.props.logout() 
								>
								<a href="#test">
									<i className="material-icons">exit_to_app</i>
								</a>
							</li>
						</ul>
						<span 
							class="material-icons"
							id="minimizeChatButton"
							style={{
								position: "absolute",
								// transform: "translate(5px,-0px)",
								fontWeight:"bolder",
								// padding:"0 10px",
								cursor:"pointer",
							}}>
							arrow_drop_down
						</span>
					</div>

					{window.initLogoutDropdown()}

					{ 
						// this.state.profile ? window.initLogoutDropdown() : null
					}
				</div>
				<div id="chatWindowBody" style={{display:""}}>
					{content}
				</div>
			</div>
		);
	}
}


export default ChatWindow;