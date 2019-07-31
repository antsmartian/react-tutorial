import React from 'react';
import "./Button.css"
import PropTypes from "prop-types";

/*
export default class Button extends React.Component {

	static propTypes = {
		name: PropTypes.string, 
		orange: PropTypes.bool 
	}

	handleClick = () => {
		console.log("button is clicked..", this.props.name)
		this.props.clickHandler(this.props.name)
	}


	render () {

	const className = ["component-button", this.props.orange ? "orange" : ""]

	return(
		<div className={className.join(" ").trim()}>
			<button onClick={this.handleClick}>{this.props.name}</button>
		</div>)
	}
}
*/

export default function Button({clickHandler, name, orange}) {

	const className = ["component-button", orange ? "orange" : ""];
	const handleClick = () => {
		console.log("button is clicked..",name)
		clickHandler(name)
	}

	return(
		<div className={className.join(" ").trim()}>
			<button onClick={handleClick}>{name}</button>
		</div>)
}


Button.propTypes = {
	name: PropTypes.string, 
	orange: PropTypes.bool, 
	clickHandler: PropTypes.func
}











