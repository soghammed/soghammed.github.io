import React, {Component} from 'react';
import SocialLogin from 'react-social-login';
import { 
	FacebookLoginButton,
	TwitterLoginButton,
	GithubLoginButton,
	GoogleLoginButton,
	InstagramLoginButton,
} from 'react-social-login-buttons';

class SocialButton extends Component {

	constructor(props){
		super(props);
	}

	render(){
		let loginButton = this.props.socialsite == 'facebook' 
		? 
		<FacebookLoginButton onClick={this.props.triggerLogin} /> 
		: 
		// this.props.provider == 'twitter'
		// ?
		// <TwitterLoginButton onClick={this.props.triggerLogin}/>
		// :
		// this.props.provider == 'github'
		// ?
		// <GithubLoginButton onClick={this.props.triggerLogin}/>
		// :
		// this.props.provider == 'google'
		// ?
		// <GoogleLoginButton onClick={this.props.triggerLogin}/>
		// :
		// this.props.provider == 'instagram'
		// ?
		// <InstagramLoginButton onClick={this.props.triggerLogin}/>
		// :
		null;

		return(
			<div>
				{loginButton}
			</div>
		);
	}

}

export default SocialLogin(SocialButton);
