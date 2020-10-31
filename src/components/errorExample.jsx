import React, { Component } from 'react';

class ErrorExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		if (this.state.value.length > 5) {
			throw new Error('You cannot enter more than five characters!');
		}
		return (
			<div>
				<label>Type away: </label>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
			</div>
		);
	}
}

export default ErrorExample;
