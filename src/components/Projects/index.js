import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
export default class Projects extends Component {
	constructor(props){
		super();
		$(document).ready(function(){
		    // $('.carousel').carousel();
		});
	}
	render() {
		let bootstrapCarousel = (
			<Carousel>
				<Carousel.Item>
				<img
				  className="d-block h-500"
				  src="images/projects/ticketLightMode.jpg"
				  alt="First slide"
				/>
				<Carousel.Caption>
				  <h3>Ticket System (Light mode)</h3>
				  <p>React + Laravel & MYSQL.</p>
				</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					  className="d-block h-500"
					  src="images/projects/vueSample.png"
					  alt="VueApp"
					/>
					<Carousel.Caption>
					  <h3></h3>
					  <p>Vue + Node.js & MYSQL.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					  className="d-block h-500"
					  src="images/projects/reactnative2.png"
					  alt="ReactNativeApp"
					/>
					<Carousel.Caption>
					  <h3>Community App</h3>
					  <p>React Native, redux, laravel & MYSQL</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					  className="d-block h-500"
					  src="images/projects/ticketDarkMode.jpg"
					  alt="TicketSystem"
					/>
					<Carousel.Caption>
					  <h3>Ticket System (Dark mode)</h3>
					  <p>React + Laravel & MYSQL</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					  className="d-block h-500"
					  src="images/projects/reactnative.png"
					  alt="ReactNativeApp"
					/>
					<Carousel.Caption>
					  <h3>Cash Flow</h3>
					  <p>React Native, redux, Laravel & MYSQL</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
		let materializeCarousel = (
			  <div class="carousel">
			    <a class="carousel-item" href="#one!"><img src="images/projects/ticketLightMode.jpg"/></a>
			    <a class="carousel-item" href="#two!"><img src="images/projects/vueSample.png"/></a>
			    <a class="carousel-item" href="#three!"><img src="images/projects/reactnative2.png"/></a>
			    <a class="carousel-item" href="#four!"><img src="images/projects/ticketDarkMode.jpg"/></a>
			    <a class="carousel-item" href="#five!"><img src="images/projects/reactnative.png"/></a>
			  </div>
		)
		return (
			<section class="projects">
				<h3 class="section-title">Projects</h3>
				{bootstrapCarousel}
			</section>
		)
	}
}