import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
	constructor(props) {
		// Calling the constructor of
		// Parent Class React.Component
		super(props);
		// initialization process

		//Defining State for the Component.
		this.state = {
			counters: [
				{ id1: 1, id: '1', value: 5 },
				{ id1: 2, id: '2', value: 0 },
				{ id1: 3, id: '3', value: 0 },
				{ id1: 4, id: '4', value: 0 }
			]
		};
		console.log('Constructor Called!');
	}

	componentWillMount() {
		console.log('Component will mount!');
	}
	componentDidMount() {
		console.log('Component did mount!');
	}

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				{this.state.counters.map((counter) => (
					<Counter key={counter.id} counter={counter} onDelete={this.handleDelete}>
						Counter #{counter.id}
					</Counter>
				))}
			</div>
		);
	}
}

export default counters;
