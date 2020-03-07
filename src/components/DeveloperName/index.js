import React from 'react'
import $ from 'jquery'

export default class DeveloperName extends React.Component {	
	constructor(props){
		super(props);
		this.state = {
			animationTrace: false,
			firstNameAnimationSpeed: this.props.firstNameAnimationSpeed ? this.props.firstNameAnimationSpeed : 'slow',
			surenameAnimationSpeed: this.props.surenameAnimationSpeed ? this.props.surenameAnimationSpeed : 'slow'
		}
		// let surenameAnimationSpeed = this.props.surenameAnimationSpeed ? this.props.surenameAnimationSpeed : 'slow'; 
		// this.props.firstNameAnimationSpeed = firstNameAnimationSpeed;
		// this.props.surenameAnimationSpeed = surenameAnimationSpeed;
		this.events();
	}

	events(){
		$(document).ready(() => {
			this.animateFirstName(this.props.firstNameAnimationStyle);
			this.animateSurename(this.props.surenameAnimationStyle);
		});
	}

	animateFirstName(style){
		$('.headline-left').animate(style, this.state.firstNameAnimationSpeed);
	}

	animateSurename(style){
		$('.headline-right').animate(style, this.state.surenameAnimationSpeed, () => {
			//if arrow is visible
			if(this.props.showArrow){
				//if animation is set on repeat
				if(this.props.repeatAnimation){
					let arrowAnimationInterval = this.startHeadlineArrowAnimation();
					
					//if hover
					$('.headline-arrow').hover((e) => {
						if(this.state.animationTrace){
							this.stopHeadlineArrowAnimation(arrowAnimationInterval);
						}
					}, () => {
						if(this.state.animationTrace){
							arrowAnimationInterval = this.startHeadlineArrowAnimation();
						}
					});

					//if clicked
					$('.headline-arrow').on('click', () => {
						this.stopHeadlineArrowAnimation(arrowAnimationInterval, true);
						this.repositionDeveloperName();
					});
				}else{
					setTimeout(this.animateHeadlineArrow, 1100);
				}
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
		$('.cover-developer-name').animate({
			margin: '20px',
		}, 'slow');
		$('.headline-left').animate({lineHeight: '15px'}, 'fast');
		$('.headline').animate({
			fontSize: '20px'
		}, 'fast');
		$('.headline-right').animate({lineHeight: '20px'}, 'fast');
		$('.headline-right').animate({paddingLeft:'30px'});
		$('.headline-arrow').fadeOut('slow', () => {
			$('.headline-code').fadeIn('slow');
		});
	}

	render() {
		let headlineArrow = this.props.showArrow ? (<span class="headline-arrow">&#8250;</span>) : '';
		return (
			<div class="cover-developer-name">
				<div class="headline headline-left">Mohammed</div>
				<div class="headline headline-right">Hammed {headlineArrow}<span class="headline-code">&lt;&#47;&gt;</span></div>
			</div>
		)
	}
}