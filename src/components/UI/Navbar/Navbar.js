import React, { Component } from 'react';

class Navbar extends Component {
	// constructor(props){
		// super(props);
	// }
	render(){
		let content = (
			<div className="nav-wrapper">
			  <span className="brand-logo" style={{marginLeft:"20px"}}>
			  	<i 
			  		className="material-icons" 
			  		style={{
			  			color:"rgba(1, 50, 51, 1)",
			  			fontSize:"2rem"
			  		}}>
			  		<b>keyboard_arrow_right</b>
			  	</i>
			  </span>
			  <ul className="right hide-on-med-and-down">
			    <li>
			    	<a href="#me" className="iconHover">
			    		<i className="material-icons">person</i>
			    	</a>
			    </li>
			    <li>
			    	<a href="#about" className="iconHover" onClick={() => window.scrollMeTo(770,'about')}>
			    		<i className="material-icons">perm_identity</i>
			    	</a>
			    </li>
			    <li>
			    	<a href="#projects" className="iconHover" onClick={() => window.scrollMeTo(0,'projects')}>
			    		<i className="material-icons">apps</i>
			    	</a>
			    </li>
			    {/* <li><a href="#contact" className="iconHover" onclick="animateSocial()"><i className="material-icons">contact_mail</i></a></li> */}
			    {/* <li><a href="#skills"><i className="material-icons">Skills</i></a></li> */}
			    {/* <li><a href="#upcomingProjects"><i className="material-icons">Upcoming Projects</i></a></li> */}
			    {/* <li><a href="#contact"><i className="material-icons">Contact</i></a></li> */}
			    {/* <li><a href="mobile.html"><i className="material-icons"></i></a></li> */}
			  </ul>
			</div>
		);
		return(
			<nav>
				{content}
			</nav>
		);
	}
}

export default Navbar;