import React, { Component } from 'react'
import DeveloperName from '../DeveloperName';
import $ from 'jquery'

export default class CoverPage extends Component {

	constructor(){
		super();
		this.events();
	}

	events(){
		$(document).ready(() => {
		
		});
	}

	render() {
		return (
			<div class="cover-container">
				<div class="dim"></div>
				<DeveloperName 
					firstNameAnimationStyle={{
						lineHeight: '70px'
					}}
					surenameAnimationStyle={{
						lineHeight: '70px',
						fontSize: '90px'
					}}
					firstNameAnimationSpeed='slow'
					surenameAnimationSpeed='slow'
					repeatAnimation={true}
					showArrow={true}/>
			</div>
		)
	}
}