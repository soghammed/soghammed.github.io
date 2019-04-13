import React, { Component } from 'react';
// import { About, ContactUs, LandingScreen, Projects, Styles } from './index';
import Navbar from '../UI/Navbar/Navbar';
import About from './About/About';
// import ContactUs from './ContactUs/ContactUs';
import LandingScreen from './LandingScreen/LandingScreen';
import Projects from './Projects/Projects';
import ChatWindow from '../ChatWindow/ChatWindow';
import Styles from './Styles/Styles';
import { connect } from 'react-redux';

class LandingPage extends Component {
		
	render(){
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
					<ChatWindow />
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
				<span 
					className="btn-floating btn-small waves-effect waves-light"
					style={{
						position: "fixed",
						bottom:"500px",
						right: "20px",
						backgroundColor:'rgba(1, 50, 51, 1)'
					}}
					onClick={() => window.scrollMeTo()}>
					<i className="material-icons">arrow_upward</i>
				</span>
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

	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);