import React from 'react';
import Button from './Button';

export default class ButtonGrid extends React.Component {
	render () {
		return(
		<div>
			<div>
				<Button name="C"/>
				<Button name="+/-"/>
				<Button name="%"/>
			</div>
			<div>
				<Button name="7"/>
				<Button name="8"/>
				<Button name="9"/>
			</div>
			<div>
				<Button name="4"/>
				<Button name="5"/>
				<Button name="6"/>
			</div>
			<div>
				<Button name="1"/>
				<Button name="2"/>
				<Button name="3"/>
			</div>
		</div>)
	}
}