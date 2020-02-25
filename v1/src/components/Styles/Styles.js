import React, { Component } from 'react';
import { Style } from "react-style-tag";
// import bg from '../../../docs/img/nightlights.jpg';

class Styles extends Component {

	// constructor(props){
		// super(props);
	// }

	render(){
	
		return(
			<Style>
				{`
					.carousel-inner img {
					    width: 100%;
					    height: 100%;
					}
					.row .col{
						padding:0;
					}
					html{
						// height:200vh;
						font-family: 'Arsenal', sans-serif;
						user-select: none;
					}
					.skills-container{
						padding-top:10px;
						color:white;
					}
					.sidebar{
						background-color:#2d2d2d;
					}
					.img-circle{
						max-width:120px;
						border-radius:50%;
					}
					.col-2,.col-10{
						padding:0;
					}
					.colorCodes{
						position:absolute;
						left:0;
						// border:1px solid green;
					}
					.about{
						height:30vh;
					}
					.colorCodes ul{
						padding:10px;
					}
					.colorCodes ul li{
						list-style-type: none;
					}
					.user-panel, 
					.skills-title, 
					.languageBadgesContainer,
					.frameworkBadgesContainer,
					.databaseBadgesContainer{
						text-align:center;
						margin:auto;
					}
					.titleM{
						margin-bottom:10px;
					}
					.skills{
						padding:10px;
					}
					.user-panel{
						padding:50px 20px 0px 20px;
						color:white;
					}
					.main-content{
						height:100vh;
						background-color:#280E1A;
					}
					.btn{
						background-color:#280E1A;
					}
					.btn:hover,.btn:active,.btn:focus{
						background-color:#280E1A
					}
					span.badge{
						display:inline-block;
						padding:5px;
						float:none;
						margin:2px;
						height:auto;
						line-height:15px;
					}
					span.badge.yellow{
						color:#2d2d2d;
					}
					.user-name{
						margin-top:10px;
						padding:5px;
					}
					.user-position{
						// margin-bottom:0px;
					}
					.row{
						margin:0;
					}
					.sidebar{
						height:100vh;
						// border:1px solid gold;
					}
					.col-10{

						// border:1px solid red;
					}
					.itemImage img{
						width:100px;
					}
					.carousel .carousel-item{
						// height:400px;
						// width:400px;
					}
					/*end new portfolio here */
					/*carousel*/
					.carouselbox {
					  font-family: helvetica,sans-serif;
					  font-size: 14px;
					  height:600px;
					  width: 600px;
					  position: relative;
					  margin: auto;
					  border: 1px solid #ccc;
					  box-shadow: 2px 2px 10px #ccc;
					  overflow: hidden;
					}
					.content {
					  margin: 0;
					  padding: 0;
					}
					.content li a img{
					  font-size: 100px;
					  margin: 0;
					  padding: 0;
					  width: 100%;
					  height:100%;
					  list-style: none;
					  text-align: center;
					}
					.active {
					  height: 500px;
					}
					.active li {
					  position: absolute;
					  top: 501px;
					  opacity: 0;
					  transform: scale(0);
					  transition: 1s;
					}
					.active li.current {
					  top: 50%;
					  opacity: 1;
					  transform: scale(1);
					  transform:translate(0, -50%);
					  transition: 1s;
					}
					.buttons{
						// position:absolute;
					}
					button.next{
						z-index:9999;
						float:right;
						position:relative;
						right:0;
						top:250px;
					}
					button.prev{
						z-index:9999;
						position:relative;
						left:0;
						top:250px;
					}
				`}
			</Style>
		);
	}
}

export default Styles;