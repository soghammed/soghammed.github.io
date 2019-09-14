import React, { Component } from 'react';
import ticketLightMode from "../../docs/img/projects/ticketLightMode.jpg";
import ticketDarkMode from "../../docs/img/projects/ticketDarkMode.jpg";
import reactNativeApp from "../../docs/img/projects/reactnative.png";
const $ = window.$;
class Projects extends Component {

	// constructor(props){
		// super(props);
	// }
	componentWillMount(){
    $(document).ready(function(){
    	let carousel;
	    carousel = (function(){
			  var box = document.querySelector('.carouselbox');
			  var next = box.querySelector('.next');
			  var prev = box.querySelector('.prev');
			  var items = box.querySelectorAll('.content li');
			  var counter = 0;
			  var amount = items.length;
			  var current = items[0];
			  box.classList.add('active');
			  function navigate(direction) {
			    current.classList.remove('current');
			    counter = counter + direction;
			    if (direction === -1 && 
			        counter < 0) { 
			      counter = amount - 1; 
			    }
			    if (direction === 1 && 
			        !items[counter]) { 
			      counter = 0;
			    }
			    current = items[counter];
			    current.classList.add('current');
			  }
			  next.addEventListener('click', function(ev) {
			    navigate(1);
			  });
			  prev.addEventListener('click', function(ev) {
			    navigate(-1);
			  });
			  navigate(0);
			})();
		});
	}

	render(){
		return(
			<div className="carouselbox active">
			  <div className="buttons">
			    <button className="btn prev">
			      ◀ <span className="offscreen"></span>
			    </button>
			    <button className="btn next">
			      <span className="offscreen"></span> ▶ 
			    </button>
			  </div>
			  <ol className="content">
			    <li><a><img src={ticketLightMode} alt="TicketLightMode"/></a></li>
			    <li><a><img src={ticketDarkMode} alt="TicketDarkMode"/></a></li>
			    <li><a><img src={reactNativeApp} alt="React native app"/></a></li>
			  </ol>
			</div>
			
			
		);
	}
}

export default Projects;