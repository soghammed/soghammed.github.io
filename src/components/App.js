import React, { Component, Fragment } from 'react'
import CoverPage from './CoverPage'
import AboutMe from './AboutMe'
import Services from './Services'
import Projects from './Projects'
import Blog from './Blog'
import ContactMe from './ContactMe'
import Footer from './Footer'
import ChatWithMeWidget from './ChatWithMeWidget'
import Button from 'react-bootstrap/Button'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import DeveloperName from './DeveloperName'
import $ from 'jquery'

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			current_view: 'scover-page',
			showArrow: true,
			headlineAnimationTrace: true
		}
		this.events();
	}

	events(){
		$(document).ready(() => {
			this.activateNavLinks();
			this.animateFirstName();
			this.animateSurename();
		});
	}

	activateNavLinks(){
		console.log($('.nav-bar li'));
		$('.nav-bar li').on('click', (e) => {
			let link = e.target;
			let section = link.className.split('-')[1];
			window.scrollMeTo(0, section);
		})
	}
	animateFirstName(style){
		$('.headline-left').animate({lineHeight:'70px'}, 'slow');
	}

	animateSurename(style){
		$('.headline-right').animate({lineHeight:'70px',fontSize:'90px'}, 'slow', () => {
			//if arrow is visible
			if(this.state.showArrow){
				//if animation is set on repeat
				let arrowAnimationInterval = this.startHeadlineArrowAnimation();
				
				//if hover
				$('.headline-arrow').hover((e) => {
					if(this.state.headlineAnimationTrace){
						this.stopHeadlineArrowAnimation(arrowAnimationInterval);
					}
				}, () => {
					if(this.state.headlineAnimationTrace){
						arrowAnimationInterval = this.startHeadlineArrowAnimation();
					}
				});

				//if clicked
				$('.headline-arrow').on('click', () => {
					this.stopHeadlineArrowAnimation(arrowAnimationInterval, true);
					this.repositionDeveloperName();
				});
			}
		});
	}

	animateHeadlineArrow(){
		let headlineArrow = $('.headline-arrow');
		//heartbeat loop
		headlineArrow.animate({
			fontSize: '+=20px',
		}, 150, () => {
			headlineArrow.animate({
				fontSize: '-=20px'
			}, 150, () => {
				headlineArrow.animate({
					fontSize: '+=20px',
				}, 150, () => {
					headlineArrow.animate({
						fontSize: '-=20px'
					}, 150);
				});
			});
		});
	}

	stopHeadlineArrowAnimation(arrowAnimationInterval, killAnimationTrace){
		clearInterval(arrowAnimationInterval);
		if(killAnimationTrace) this.setState({animationTrace: false});
	}

	startHeadlineArrowAnimation(){
		if(!this.state.animationTrace) this.setState({animationTrace: true});
		return setInterval( this.animateHeadlineArrow, 1100);
	}

	repositionDeveloperName(){
		$('.developer-name').animate({
			margin: '20px',
		}, 'slow');
		$('.developer-name-container').animate({
			width: 'auto',
			height: 'auto',
			zIndex: 2
		}, 'slow');
		$('.headline-left').animate({lineHeight: '15px'}, 'fast');
		$('.headline').animate({
			fontSize: '20px'
		}, 'fast');
		$('.headline-right').animate({lineHeight: '20px', paddingLeft: '30px'}, 'fast');
		// $('.headline-right').animate({paddingLeft:'30px'});
		$('.headline-arrow').fadeOut('slow', () => {
			$('.headline-code').fadeIn('slow', this.displayPortfolio);
		});
	}

	displayPortfolio(){
		$('.portfolio').animate({opacity: 1}, 'slow');
	}

	render() {
		let headlineArrow = this.state.showArrow ? (<span class="headline-arrow">&#8250;</span>) : '';
		let portfolioView = (
			<Fragment>
				<div class="homepage-container">
					<div class="dim"></div>
					<div class="developer-name-container">
						<div class="developer-name">
							<div class="headline headline-left">Mohammed</div>
							<div class="headline headline-right">Hammed {headlineArrow}<span class="headline-code">&lt;&#47;&gt;</span></div>
						</div>
					</div>
					<div class="portfolio">
						<ul class="nav-bar">
							<li class="nav-aboutme">About Me</li>
							<li class="nav-projects">Projects</li>
							<li class="nav-services">Services</li>
							<li class="nav-contactme">Contact Me</li>
						</ul>
						<AboutMe/>
						<Projects/>
						<Services/>
						<ContactMe/>
					<ChatWithMeWidget size={40} color="white"/>
					</div>
				</div>
			</Fragment>
		);
		let portView = this.state.current_view === 'cover-page' ? (<CoverPage />) : portfolioView;
		return (
			<Fragment>
				{portView}
			</Fragment>
		)
	}
}