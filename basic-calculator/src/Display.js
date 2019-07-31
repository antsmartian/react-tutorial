import React from 'react';
import './Display.css';
import PropTypes from "prop-types";

/*
export default class Display extends React.Component {
	static propTypes = {
		value: PropTypes.string
	}


	render () {
		return(
			<div className="component-display">
				{this.props.value}
			</div>)
	}
}
*/

export default function Display({value}) {
	return(
			<div className="component-display">
				{value}
			</div>)
}

Display.propTypes = {
	value: PropTypes.string
}