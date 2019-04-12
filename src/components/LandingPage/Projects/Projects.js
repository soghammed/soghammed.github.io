import React from 'react';
import ticketLightMode from "../../../docs/img/projects/ticketLightMode.jpg";
import ticketDarkMode from "../../../docs/img/projects/ticketDarkMode.jpg";
import reactNativeApp from "../../../docs/img/projects/reactnative.png";

const Projects = () => (
	<div className="projects section">
		<div className="projectsContent" style={{margin:"200px 100px"}}>
			<div className="center projectHolder">
				<div className="item">
					<div className="itemImage">
						<img src={ticketLightMode} alt="" />
					</div>
					<div className="itemTextHolder">
						<div className="itemText" style={{margin:"auto"}}>Internal Ticket System<br/> (Tech: Laravel/React.js+redux) <br/>light mode</div>
					</div>
				</div>
				<hr/>
				<div className="item">
					<div className="itemImage">
						<img src={ticketDarkMode} alt="" />
					</div>
					<div className="itemTextHolder">
						<div className="itemText" style={{margin:"auto"}}>Internal Ticket System<br/> (Tech: Laravel/React.js+redux) <br/>dark mode</div>
					</div>
				</div>
				<hr/>
				<div className="item">
					<div className="itemImage">
						<img src={reactNativeApp} alt="" style={{width:"20%"}} />
					</div>
					<div className="itemTextHolder">
						<div className="itemText" style={{margin:"auto"}}>Cash Flow App<br/> (Tech: React Native+redux)</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;