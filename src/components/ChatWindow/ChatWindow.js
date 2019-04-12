import React, { Component } from 'react';
// import { 
	// FacebookLoginButton,
	// TwitterLoginButton,
	// GithubLoginButton,
	// GoogleLoginButton,
	// InstagramLoginButton,
// } from 'react-social-login-buttons';
// import SocialLogin from 'react-social-login';
import SocialButton from '../UI/Buttons/SocialButton';

class ChatWindow extends Component {

	constructor(props){
		super(props);

		this.handleSocialLogin = this.handleSocialLogin.bind(this);
	}

	componentWillMount(){
		this.setState({
			client:null
		}, () => console.log(this.state));
	}

	handleSocialLogin(user){
		console.log('user', user);
		this.setState({
			client:user.profile
		})
	}

	handleSocialLoginFailure(err){
		console.log('err',err);
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
				class="card"
				style={{
					margin:0
				}}>
				<div 
					class="card-header center"
					style={{
						color:"white",
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
				</div>
				{
					//if comments exist show container else show login
					comments ? 
					(
						<div>
							<div 
							class="card-body"
							style={{
								marginTop:"20px",
								position:"relative",
								minHeight:"200px",
								maxHeight:"300px",
								overflowY:"scroll",
								padding:"0 10px",
								borderRadius:"20px",
								// padding:"40px",
							}}>
							{
								comments ? 
								comments.map(comment => {
									let commentView = (
										<div
											class="card hoverable"
											style={{
												backgroundColor: clientID == comment.by_userID ? "rgba(255,255,255,1)" : "gold",
												padding:"20px",
												// margin:"10px 0 20px",
												display:'inline-block',
												maxWidth:"100%",
												overflowWrap:"break-word",
												// float:this.props.client.id == comment.by_userID ? "right" : "left",
												float:clientID == comment.by_userID ? "right" : "left",
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
												{comment.by_userID == clientID ? "" : comment.owner.displayName}
												</b>
											</div>
											<div style={{color:themeMode == "dark" ? "#eee" : "#2d2d2d",whiteSpace: "pre-wrap"}}>
												{comment.comment}
											</div>

										</div>
									);
									return commentView;
								})
								:
								(
									<div
										class="card hoverable"
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
								)
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
						          		color: "red",
						          	}}>message</i>
						          <textarea 
						          	id="icon_prefix2" 
						          	className="materialize-textarea" 
						          	autoComplete="press"
						          	// value={this.state.message}
						          	// onChange={(e) => this.setState({message: e.target.value}, () => console.log(this.state))}
						          	></textarea>
						          <label 
						          	htmlFor="icon_prefix2" 
						          	style={{
						          		color: "#eee"
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
						        	// onClick={() => this.addComment(ticket.id, this.state.message, ticket.for_user_id)}
						        	><i className="material-icons">check</i></button>	
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
							{
								this.state.client ? 
								this.state.client.email+" is logged in" 
								:
								(
									<div>
										<SocialButton 
											provider="facebook"
											appId="439064089970483"
											onLoginSuccess={this.handleSocialLogin}
											onLoginFailure={this.handleSocialLoginFailure}
											socialsite="facebook"/>
										<SocialButton 
											provider="google"
											appId="1040584838630-pf5ubddagk3bo898q6iubktr3hd6u4k4.apps.googleusercontent.com"
											onLoginSuccess={this.handleSocialLogin}
											onLoginFailure={this.handleSocialLoginFailure}
											socialsite="google"/>
									</div>
								)
							}
						</div>
					)
				}
				{
					//display comment only if owner of ticket or assigned to user 
					// this.props.client.id == ticket.owner.id || this.props.client.id == ticket.assigned_to.id ?
					// (
					
					// )
					// :
					// null
				}
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
					right:0,
					// minHeight:"500px",
					minWidth:"450px",
				}}>
				{content}
			</div>
		);
	}

}


export default ChatWindow;