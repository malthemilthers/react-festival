import React, { Component } from 'react';

import samplePerformances from '../sample-performances';

import Performance from './Performance';
import DayPicker from './DayPicker';
import Search from './Search';
import FilterSelect from './FilterSelect';


const yearOptions = [2015, 2016, 2017];
const categoryOptions = ['All', 'Danseteater', 'Børneteater', 'Drama', 'Musikteater'];
const areaOptions = ['All', 'København SV', 'København N', 'København Ø'];

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
				<div className="program-filters">
					
					<div className="program-filter-blocks">
						<FilterSelect title="Year" options={yearOptions} defaultOption="2017"/>
						<FilterSelect title="Category" options={categoryOptions} defaultOption="Danseteater"/>
						<FilterSelect title="Area" options={areaOptions} defaultOption="København N"/>
					</div>

					<div className="program-filter-search">
						<Search/>
					</div>

					{/*<button onClick={this.loadPerformances}>Load Performances </button>*/}
				</div>
				
			
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