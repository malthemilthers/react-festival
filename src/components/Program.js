import React, { Component } from 'react';

import Performance from './Performance';
import DayPicker from './DayPicker';
import samplePerformances from '../sample-performances';

class Program extends Component {

	constructor() {
		super();

		this.loadPerformances = this.loadPerformances.bind(this);
		this.loadDay = this.loadDay.bind(this);


		//getInitialState
		this.state = {
		  performances: {},
		  favorites:{}
		}
	}

	loadPerformances() {
	  this.setState({
	    performances: samplePerformances
	  });
	}


	loadDay(date) {
		
		// Create date-string(ex. 2017-06-01)
		date.setDate(date.getDate() + 1);
		const dateString = date.toISOString().slice(0,10); 
		console.log(dateString);
		//const dateString = '2017-06-01';

		// Filter ALL performances by Date
		const allPerformances = samplePerformances;

		// Filter for the specified date
		const dailyPerformances = allPerformances.filter( performance => performance.date === dateString);

		this.setState({
			performances: dailyPerformances
		});

	}


	render() {
		return (
			<div className="program">
				<h1>Program</h1>
				<button onClick={this.loadPerformances}>Load Performances </button>
				<hr/>
				<DayPicker loadDay={this.loadDay}/>
				<div className="event-list">
					{
						Object
							.keys(this.state.performances)
							.map(key => <Performance key={key} details={this.state.performances[key]}/>)
					}
				</div>
			</div>
		) 
	}

}

export default Program;