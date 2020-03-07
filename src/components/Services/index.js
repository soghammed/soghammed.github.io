import React, { Component } from 'react'
import { FaWrench, FaMobileAlt, FaHandsHelping, FaHammer, FaDesktop } from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';

export default class Services extends Component {
	render() {
		return (
			<section class="services">
				<h3 class="section-title">Services</h3>
				<div class="row services-list-containe"r>
					<div class="col col-sm-12 col-md-4 col-lg-4 service service-one">
						<div class="flip-card">
						  <div class="flip-card-inner">
						    <div class="flip-card-front">
						  		<div class="flip-card-front-title">Web Development</div>
						  		<div class="flip-card-front-content">
							    	<IoMdBrowsers size={80}/>
							    	<FaWrench size={80}/>
							    </div>
						    </div>
						    <div class="flip-card-back">
						    	<div class="flip-card-back-title">Web Development</div>
						    	<div class="service-desc">Web Development from idea to final product in 4 weeks using the latest cutting edge tech.</div>
						    </div>
						  </div>
						</div>
					</div>
					<div class="col col-sm-12 col-md-4 col-lg-4 service service-two">
						<div class="flip-card">
						  <div class="flip-card-inner">
						    <div class="flip-card-front">
						    	<div class="flip-card-front-title">Application Development</div>
						    	<div class="flip-card-front-content">
							    	<FaDesktop size={80}/>
							    	<FaMobileAlt size={80}/>
							    </div>
						    </div>
						    <div class="flip-card-back">
						    	<div class="flip-card-back-title">Application Development</div>
						    	<div class="service-desc">Application Development scoping all platfroms from desktop to mobile devices.</div>
						    </div>
						  </div>
						</div>
					</div>
					<div class="col col-sm-12 col-md-4 col-lg-4 service service-three">
						<div class="flip-card">
						  <div class="flip-card-inner">
						    <div class="flip-card-front">
						    	<div class="flip-card-front-title">IT Support</div>
						    	<div class="flip-card-front-content">
							    	<FaHandsHelping size={80}/>
							    	<FaHammer size={80}/>
							    </div>
						    </div>
						    <div class="flip-card-back">
						    	<div class="flip-card-back-title">IT Support</div>
						    	<div class="service-desc">Maintenance & consultation services with 24 hour support available at your fingertips, contact for details.</div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}