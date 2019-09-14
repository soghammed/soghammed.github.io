import React, { Component, Fragment } from 'react';
import mypic from '../../docs/img/bg.jpg';
import Projects from '../Projects/Projects';
import About from '../About/About';

import Styles from '../Styles/Styles';
// import ticketLightMode from "../../docs/img/projects/ticketLightMode.jpg";
// import ticketDarkMode from "../../docs/img/projects/ticketDarkMode.jpg";
// import reactNativeApp from "../../docs/img/projects/reactnative.png";
// <div className="itemText" style={{margin:"auto"}}>Internal Ticket System<br/> (Tech: Laravel/React.js+redux) <br/>light mode</div>
class Home extends Component {


	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		return(
			<Fragment>
				<Styles/>
				<div className="row">
					<div className="col s12 l2 sidebar">
						<div className="colorCodes">
							<ul>
								<li><span className="new badge red" data-badge-caption="&lt; 1yr"></span></li>
								<li><span className="new badge orange" data-badge-caption="&lt; 2yr"></span></li>
								<li><span className="new badge blue" data-badge-caption="&lt; 3yr"></span></li>
								<li><span className="new badge green" data-badge-caption="&#x003E;= 3yr"></span></li>
							</ul>
						</div>
						<div className="user-panel">
							<img src={mypic} className="img-circle" alt="profilepic"/>
							<div className="user-name">Mohammed Hammed</div>
							<div className="user-position">Full Stack Developer</div>
							<hr/>
						</div>
						<div className="skills-container">
							<h5 className="skills-title">Skills</h5>
							<div className="skills">
								<div className="languageBadgeTitle titleM">Languages:</div>
								<div className="languageBadgesContainer titleM">
									<span className="new badge green" data-badge-caption="HTML"></span>
									<span className="new badge green" data-badge-caption="CSS"></span>
									<span className="new badge green" data-badge-caption="JavaScript"></span>
									<br/>
									<span className="new badge green" data-badge-caption="PHP"></span>
									<span className="new badge red" data-badge-caption="Python"></span>
									<br/>
									<span className="new badge red" data-badge-caption="Java"></span>
								</div>
								<hr/>
								<div className="titleM frameworkBadgeTitle">Frameworks:</div>
								<div className="frameworkBadgesContainer titleM">
									<span className="new badge green" data-badge-caption="Laravel"></span>
									<span className="new badge orange" data-badge-caption="Zend"></span>
									<span className="new badge orange" data-badge-caption="Symfony"></span>
									<br/>
									<span className="new badge orange" data-badge-caption="React"></span>
									<span className="new badge red" data-badge-caption="Angular"></span>
									<br/>
									<span className="new badge red" data-badge-caption="Vue"></span>
									<span className="new badge orange" data-badge-caption="Coldfusion"></span>
									<span className="new badge orange" data-badge-caption="Lucee"></span>
									<br/>
									<span className="new badge red" data-badge-caption="Java"></span>
									<span className="new badge red" data-badge-caption="CodeIgniter"></span>
									<br/>
									<span className="new badge green" data-badge-caption="JQuery"></span>
									<span className="new badge green" data-badge-caption="Bootstrap"></span>
								</div>
								<hr/>
								<div className="titleM databaseBadgeTitle">Databases:</div>
								<div className="databaseBadgesContainer titleM">
									<span className="new badge green" data-badge-caption="MYSQL"></span>
									<span className="new badge orange" data-badge-caption="SQLITE"></span>
									<span className="new badge orange" data-badge-caption="Cloud"></span>
								</div>
								<hr/>
							</div>
						</div>
					</div>
					<div className="col s12 l10 main-content">
						<section className="about">
							<About/>
						</section>
						<section className="projects">
							<Projects/>
						</section>
						<section className="testimonials">

						</section>
					</div>
				</div>
			</Fragment>
		)
	}

}

export default Home;