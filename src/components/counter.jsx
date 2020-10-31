import React, { Component } from 'react';
class counter extends Component {
	state = {
		count: this.props.counter.value
	};

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<React.Fragment>
				{this.props.children}
				<h1 className="badge badge-primary m-3">{this.formatCount()} </h1>
				<button className="btn btn-success" onClick={this.handleClick}>
					Click to Increament
				</button>
				<button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id1)}>
					Click to Delete
				</button>
				<br />
			</React.Fragment>
		);
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default counter;
