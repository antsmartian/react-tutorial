import React, { Component } from "react";
import ReactDOM from 'react-dom';
import List from 'components/List';

export default class App extends Component {
	componentDidMount() {
		console.log("componentDidMount")
		this.props.fetchStoriesForThePage()
	}

	render() {
		const {isFetching} = this.props;

		console.log("stories!!", isFetching)

		if(isFetching) {
			return <div>Loading screen</div>
		}

		return (
				<div>
					<List />
				</div>
			)
	}
}