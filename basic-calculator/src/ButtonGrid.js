import React from 'react';
import Button from './Button';
import './ButtonGrid.css'
import PropTypes from "prop-types";

export default function ButtonGrid({clickHandler}) {

	const handleClick = name => {
		clickHandler(name)
	}

	return(
		<div className="component-button-grid">
			<div>
				<Button name="C" clickHandler={handleClick}/>
				<Button name="+/-" clickHandler={handleClick}/>
				<Button name="%" clickHandler={handleClick}/>
				<Button name="/" clickHandler={handleClick} orange/>
			</div>
			<div>
				<Button name="7" clickHandler={handleClick}/>
				<Button name="8" clickHandler={handleClick}/>
				<Button name="9" clickHandler={handleClick}/>
				<Button name="x" clickHandler={handleClick} orange/>
			</div>
			<div>
				<Button name="4" clickHandler={handleClick}/>
				<Button name="5" clickHandler={handleClick}/>
				<Button name="6" clickHandler={handleClick}/>
				<Button name="-" clickHandler={handleClick} orange/>
			</div>
			<div>
				<Button name="1" clickHandler={handleClick}/>
				<Button name="2" clickHandler={handleClick}/>
				<Button name="3" clickHandler={handleClick}/>
				<Button name="+" clickHandler={handleClick} orange/>
			</div>
			<div>
				<Button name="0" clickHandler={handleClick} />
				<Button name="." clickHandler={handleClick}/>
				<Button name="." clickHandler={handleClick}/>
				<Button name="=" clickHandler={handleClick} orange/>
			</div>
		</div>)
}

















