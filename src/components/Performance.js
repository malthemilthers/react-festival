import React, { Component } from 'react';

class Performance extends Component {

	render() {
		return (
			<div className="event-list-item">
				<div className="event-list-item-image">
					<img src={this.props.details.imageURL} alt="" width="200px"/>
				</div>
				<div className="event-list-item-time">{this.props.details.time}</div>
				<h3 className="event-list-item-title">{this.props.details.title}</h3>
				<div className="event-list-item-production">{this.props.details.production}</div>
			</div>
		) 
	}

}

export default Performance;