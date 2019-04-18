import React, { Component } from 'react';
// import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
const $ = window.$;

const animation = {
	startStyle:{
		display:"none",
	},
	endStyle:{
		display:"block",
		width:"50%"
	}
}

class Notifications extends Component {

	constructor(props){
		super(props);
		// console.log(props)
	}

	dismiss(){
		console.log('jhere');
		this.props.dismiss();
	}

	animationExec(){
		console.log(this.props);
		if(this.props.status){
			// console.log("Status: ", this.props.status);
			if($("#notification_bar").css('display') == "block"){
				// console.log('notification bar is visible just editin html with this new message: ', this.props.info);
				if(this.props.info){
					// console.log('change if condition to check if message has changed and edit only if true');
					// console.log($('.notification_bar_message').html().trim() === this.props.info.trim());
					$('.notification_bar_message').html(this.props.info);
				}else{
					// console.log('same notifcation');
				}
			}else if($("#notification_bar").css('display') == "none"){
				// console.log('is not visible, so we animating it to show and appending th followin: ', this.props.info);
				$('#notification_bar').animate(
			  		{width: "toggle"}, "slow", () => $('.notification_bar_message').html(this.props.info)
			  	);
			}
		}else{
			// console.log("Status: ", this.props.status);
			if($("#notification_bar").css('display') == "block"){
				// console.log('notification bar is visible so we setting html to empty string and animating it away. hiding it');
				$('.notification_bar_message').html('')
				$('#notification_bar').animate(
			  		{width: "toggle"}, "slow", () => console.log('done hiding notifcation bar')
			  	);	
			}
		}
	}

	render(){
		// this.props.status ? 
		this.animationExec();
		// : 
		// $("#notification_bar").css('display') == "block" ? 
		// $('#notification_bar').animate(
		// 	{width: "toggle"}, "slow", () => $('.notification_bar_message').html('')
		// )
		// :
		// null
		return(
			<div
				id="notification_bar"
				style={{
						backgroundColor: this.props.backgroundColor, 
						color: this.props.color,
						// borderRadius:"3px",
						position:"fixed",
						bottom:"20px",
						left:"35px",
						// borderTopRightRadius:"20px",
						// borderBottomRightRadius:"20px",
						// opacity:0
						width:this.props.width,
						minHeight:"140px",
						maxHeight:"140px",
						maxWidth:"318px",
						wordWrap: "break-word",
						padding:"30px",
						paddingTop: "40px",
						paddingRight: "40px",
						// visibility:
						display:"none",
						zIndex:"1",
						// left:"50%"
				}}
				className={"notification_bar card"}
				>
				<div 
					style={{
						width:"auto",
						marginTop:"10px",
					}}
					className="notification_bar_message"
					>
				</div>
				
				<div style={{position:"absolute", top:"10px",right:"10px", cursor:"pointer"}} className="right-align">
					<button 
						className="btn-floating btn-small waves-effect waves-light" 
						style={{backgroundColor:this.props.themeColor}}
						>
						<i className="material-icons" style={{color: this.props.textColor }} onClick={() => this.dismiss()}>close</i>
					</button>
				</div>
			</div>

		);
	}
}

export default Notifications;