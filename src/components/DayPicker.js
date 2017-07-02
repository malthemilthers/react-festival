import React, { Component } from 'react';


class DayPicker extends Component {
	
	constructor() {
		super();

		this.renderDay = this.renderDay.bind(this);
	}


	 //Return the array of dates within the specified range.
	getDateRange(startDate, endDate) {

		// Get the time for endDate
		const endTime = endDate.getTime();

		// Set currentDate var to be the same date as the startdate.
		let currentDate = new Date(startDate);
		// Reset the time
		currentDate.setHours(0, 0, 0, 0);

		// Make sure that the end time is AFTER the start time
		if (startDate.getTime() > endTime) {
   			throw new Error('The first date cannot be after the second date');
		}		

		// Empty array to store all dates in.
		let dates = [];

		while(currentDate.getTime() <= endTime) {
			
			// Add currentDate to the dates array
			dates.push(new Date(currentDate));

			// Increase currentDate by one day.
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return dates;
	}

	renderDay(date, i) {
		const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const dayName = daysInWeek[date.getDay()];
		
		return(
			<div className="daypicker-day" key={i} onClick={() => this.props.loadDay(date)}>
				<div className="daypicker-day-content">
					<div className="daypicker-day-name">{dayName}</div>
					<div className="daypicker-day-date">{("0" + date.getDate()).slice(-2)}/{("0" + (date.getMonth() + 1)).slice(-2)}</div>
				</div>
			</div>
		)
	}

	render() {
		let startDate = new Date(2017, 4, 31);
		let endDate = new Date(2017, 5, 11);
		let dateArray = this.getDateRange(startDate, endDate);
		
		return (
			<div className="daypicker">
				{dateArray.map(this.renderDay)}
			</div>
		) 
	}

}

export default DayPicker;
