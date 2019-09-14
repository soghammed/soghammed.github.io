import React, { Component } from 'react';
import profileImage from '../../docs/img/bg.jpg';

class Sidebar extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="sidebar">
            	<div className="user-panel">
            		<div class="pull-left image">
            			<img src={profileImage} class="img-circle" alt="User Image"/>
            		</div>
            		<div class="pull-left info">
            			<p>Mohammed Hammed</p>
            			<a href="#">
            				<i class="fa fa-circle text-success"></i> Online
            			</a>
            		</div>
            	</div>
            </section>
        );
    }
}

export default Sidebar;
