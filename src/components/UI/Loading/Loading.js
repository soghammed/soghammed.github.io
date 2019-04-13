import React from 'react';

const Loading = (props) => (
	<div className={"preloader-wrapper "+props.size+" active"}>
		<div className={"spinner-layer spinner-"+props.color+"-only"}>
		  <div className="circle-clipper left">
		    <div className="circle"></div>
		  </div><div className="gap-patch">
		    <div className="circle"></div>
		  </div><div className="circle-clipper right">
		    <div className="circle"></div>
		  </div>
		</div>
	</div>
);

export default Loading;