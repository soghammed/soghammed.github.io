import React, {Component} from 'react';
import SocialLogin from 'react-social-login';
import { 
	FacebookLoginButton,
	TwitterLoginButton,
	GithubLoginButton,
	GoogleLoginButton,
	InstagramLoginButton,
} from 'react-social-login-buttons';
// import { setClient, unsetClient, uiStartLoading, uiStopLoading } from '../../../store/actions/index';
import Loading from '../Loading/Loading';

class SocialButton extends Component {

	constructor(props){
		super(props);
		// console.log(props);
		this.isLoggedIn = this.isLoggedIn.bind(this);
		this.checkLoggedIn = this.checkLoggedIn.bind(this);
		this.triggerLogin = this.triggerLogin.bind(this);
		// this.props.uiStartLoading();
		// console.log(this.props.triggerLogout());
	}

	componentWillMount(){
		// this.setState({
		// 	isConnected: false,
		// 	isLoaded: false
		// })
		// console.log(this.props);
		// setTimeout(() => {
		// 	this.isLoggedIn();
		// }, 1000)
		// console.log('ran social button component will mount');
	}

	componentDidMount(){
		// window.fbAsyncInit();
		

	}

	isLoggedIn(){
		return this.props.logged;
	}

	triggerLogin(){
		window.FB.getLoginStatus((response) => {
		switch(response.status){
			case 'connected':
			// console.log(window);
				// window.FB.api("http://graph.facebook.com/"+response.authResponse.userID+"/picture", {

				// }, (res) => {
				// 	console.log(res);
				// })
				window.FB.api("/me",{
					fields: 'name,email,picture',
					// access_token: response.authResponse.accessToken
				}, (res) => {
					console.log('returned from api/me', res);
					this.props.setClient(res, 'facebook', response.authResponse.accessToken);
					// this.setState({isConnected:true, isLoaded:true})
				});
				break;
			case 'not_authorized':
				console.log('case not_authorized');
				this.props.triggerLogin();
				break;

			case 'unknown':
				console.log('case unknown');
				this.props.triggerLogin();
				break;
			default:
				console.log('err')
				break;
		}
		// switch(response.status){
		// 	case 'connected':
		// 	// console.log(window);
		// 		// window.FB.api("http://graph.facebook.com/"+response.authResponse.userID+"/picture", {

		// 		// }, (res) => {
		// 		// 	console.log(res);
		// 		// })
		// 		window.FB.api("/me",{
		// 			fields: 'name,email,picture',
		// 			// access_token: response.authResponse.accessToken
		// 		}, (res) => {
		// 			console.log('returned from api/me', res);
		// 			this.props.setClient(res, 'facebook', response.authResponse.accessToken);
		// 		});
		// 		break;
		// 	case 'not_authorized':
		// 		console.log('case not_authorized');
		// 		// this.props.triggerLogin();
		// 		break;

		// 	case 'unknown':
		// 		console.log('case unknown');
		// 		// this.props.triggerLogin();
		// 		break;
		// 	default:
		// 		console.log('err')
		// 		break;
		// }
		});
	}

	checkLoggedIn(){
		//if profile is null continue.
		if(!this.props.logged){
			switch(this.props.socialsite){
				case 'facebook':
					console.log('checkLoggedIn inside fb case');
					window.FB.getLoginStatus((response) => {
						// console.log(window.FB.getProfileUser(), response);
						switch(response.status){
							case 'connected':
							// console.log(window);
								// window.FB.api("http://graph.facebook.com/"+response.authResponse.userID+"/picture", {

								// }, (res) => {
								// 	console.log(res);
								// })
								window.FB.api("/me",{
									fields: 'name,email,picture',
									// access_token: response.authResponse.accessToken
								}, (res) => {
									console.log('returned from api/me', res);
									this.props.setClient(res, 'facebook', response.authResponse.accessToken);
								});
								break;
							case 'not_authorized':
								console.log('case not_authorized');
								// this.props.triggerLogin();
								break;

							case 'unknown':
								console.log('case unknown');
								// this.props.triggerLogin();
								break;
							default:
								console.log('err')
								break;
						}
					});
					break;

				default: 
					console.log('default isLoggedIn Switch');
					break;
			}
		}else{
			this.props.uiStopLoading();
		}
	}

	render(){
		// console.log(this);
		let loginButton = this.props.socialsite === 'facebook' ? 
		<FacebookLoginButton onClick={this.triggerLogin} /> 
		: 
		this.props.socialsite === 'twitter'
		?
		<TwitterLoginButton onClick={this.props.triggerLogin}/>
		:
		this.props.socialsite === 'github'
		?
		<GithubLoginButton onClick={this.props.triggerLogin}/>
		:
		this.props.socialsite === 'google'
		?
		<GoogleLoginButton onClick={this.props.triggerLogin}/>
		:
		this.props.socialsite === 'instagram'
		?
		<InstagramLoginButton onClick={this.props.triggerLogin}/>
		:
		null;

		return(
			<div>
				{ this.props.isLoading ? <Loading size="small" color="green" /> : loginButton}
			</div>
		);
	}

}

export default SocialLogin(SocialButton);
