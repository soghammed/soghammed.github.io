import React from 'react';

const About = () => (
	<div 
		className="about section center" 
		style={{
			padding:"50px",
			backgroundColor:"#280E1A",
			display:"flex",
			justifyContent:"center",
			alignContent:"center",
			flexDirection:"column"
		}}
		>
		<div style={{fontSize:"1.5rem"}}>
			<div style={{color:"rgba(255,255,255,1)"}}>
				I<span style={{fontWeight:"bolder"}}>'</span>m a passionate coder, looking to provide industry standard cross-platform software/web solutions aimed at enhancing human's quality of life.
			</div>
			<br/>
			<span style={{color:"rgba(255,255,255,0.3)"}}><i>"If you can envision your product, you're half way there."</i></span>
		</div>
	</div>
);

export default About;