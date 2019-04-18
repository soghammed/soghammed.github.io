import React, { Component } from 'react';
import { Style } from "react-style-tag";
import bg from '../../../docs/img/nightlights.jpg';

class Styles extends Component {

	// constructor(props){
		// super(props);
	// }

	render(){
	
		return(
			<Style>
				{`
					html{
						// height:200vh;
						font-family: 'Arsenal', sans-serif;
						user-select: none;
					}
					nav{
						z-index: 1;
						background-color: rgba(0,0,0,1);
					}
					body{
						background-color:#013233;
					// 	background-image: url(`+bg+`);//url('docs/img/nightlights.jpg');
					// 	background-repeat: no-repeat;
					// 	background-size: auto;
					// 	background-attachment: fixed;
					// 	background-position: center;
					// 	filter:blur(0px);
					}
					.section{
						min-height:600px;
					}
					.bounce {
						animation: bounce;
						animation-iteration-count: infinite;
						animation-duration: 1s;
					}
					@keyframes bounce {
						0% {
							transform: translate(0,0);
						}

						50% {
							transform: translate(0, 50px);
						}

						100% {
							transform: translate(0, 0);
						}
					}
					.textshadow{
						/*border:2px solid black;*/
						text-shadow:1px 1px 1px black;
					}
					.img-responsive {
					    max-width: 100%;
					    height: auto;
					    vertical-align: middle;
					}
					.itemImage img{
						width:100%;
					}
					.item{
						margin-bottom:20px;
					}
					.itemText{
						padding:20px;
						border-radius:2px;
						background-color:rgba(1, 50, 51, 1);
						color:white;
						width:20%;
					}
					.textItemHolder{
						min-width: 200px;
					}
					.itemText:hover{
						background-color:#280E1A;;
					}
					.projectHolder{
						overflow-y: scroll;
						max-height: 750px;
					}
					.socialMediaStripe{
						/*width:50px;*/
						/*border:1px solid gold;*/
						position:fixed;
						top:50px;
						left:0;
					}
					.socialMediaStripe ul li{
						margin-top:10px;
						transition: all 0.2s;
					}
					.socialMediaStripe ul li:hover{
						font-size:1.2rem;
					}
					/* width */
					::-webkit-scrollbar {
					  width: 7px;
					}

					::-webkit-scrollbar-track {
						// background-color:rgba(0,0,0,1);

					  /*box-shadow: inset 0 0 5px red; */
					  /*border-radius: 10px;*/
					}
					 
					/* Handle */
					::-webkit-scrollbar-thumb {
					  background: transparent;//rgba(1, 50, 51, 1)
					  /*border-radius: 10px;*/
					}

					/* Handle on hover */
					::-webkit-scrollbar-thumb:hover {
					  background: #280E1A;
					}
					.iconHover:hover i{
						color: rgba(1, 50, 51, 1);//#280E1A;
					}
					/*		#aboutIcon :hover i {
				  		color: red; 
				  	}*/
				  	a{
				  		color:rgba(1, 50, 51, 1);
				  	}
				  	#chatWindow{
				  		transition: height 0.3s linear;
				  	}
				`}
			</Style>
		);
	}
}

export default Styles;