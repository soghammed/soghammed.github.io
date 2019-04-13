import React, { Component } from 'react';


class User extends Component {


	constructor (props){
		super(props);
		console.log('props from User', this.props);

	}

	render(){
		return(
			<div class="card">
				<h5>User Details here</h5>
				<button onClick={this.props.logout}>Logout</button>
			</div>
		)
	}

}

export default User;
