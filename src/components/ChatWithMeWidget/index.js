import React from 'react'
import { MdChatBubbleOutline } from 'react-icons/md'

export default class ChatWithMeWidget extends React.Component {
	render() {
		return (
			<div class="chat-with-me-widget">
				<MdChatBubbleOutline size={this.props.size} color={this.props.color}/>			
			</div>
		)
	}
}