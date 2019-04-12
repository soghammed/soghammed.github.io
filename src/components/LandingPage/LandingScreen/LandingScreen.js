import React, { Component } from 'react';
import mypic from '../../../docs/img/bg.jpg';

class LandingScreen extends Component {
	
	// constructor(props){
		// super(props);
	// }

	render(){
		let content = (
			<div 
				className="headerView section center" 
				style={{
					height:"94vh",
					position:"relative",
					display:"flex",
					flexDirection:"column",
					justifyContent:"center",
					alignContent:"center"
				}}>
				<div className="imageHolder">
					<img 
						className="responsive-img" 
						src={mypic} 
						style={{
							borderRadius:"50%",
							width:"15%"
						}}
						alt="M Hammed"/>
				</div>
				<div className="HeaderTitle">
					<span 
						className="textshadow" 
						style={{
							fontSize:"4rem",
							color:"#eee"
						}}>
						S.O.G<br/>Full Stack Developer
					</span>
				</div>
				<div className="arrowDownHolder center">
					<i 
						className="material-icons bounce" 
						id="pullmedown" 
						style={{
							cursor:"pointer",
							color:"white",
							fontSize:"5rem"
						}}
						onClick={ () => this.props.scrollMeTo(770, 'about')}>keyboard_arrow_down</i>
				</div>
			</div>
		)
		return (
			<div>
				{content}
			</div>
		);
	}
}


export default LandingScreen;