import React, { Component } from 'react';

class FilterSelect extends Component {

	constructor() {
		super();
		this.renderOption = this.renderOption.bind(this);
	}

	renderOption(value, key) {
		return (
			<option value="">{value}</option>
		)
	}

	render() {
		return (
			<div className="filter-select">
				<div className="filter-select-title">{this.props.title}</div>
				<div className="filter-select-selected-option">{this.props.defaultOption}</div>
				<select name="" id="">
					{this.props.options.map(this.renderOption)}
				</select>
			</div>
		) 
	}

}

export default FilterSelect;