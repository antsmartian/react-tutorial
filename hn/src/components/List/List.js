import React, { Component } from "react";
import ReactDOM from 'react-dom';

const List = (props) => {
	const { stories } = props;

	console.log("the stories are", stories);

	return (
			<div>
				{
					stories.map(() => (<div>HN Article</div>))
				}
			</div>
		)
}

export default List;