import React from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends React.Component {
	constructor ( props ) {
		super( props );
	}
	render() {
		return (
			<nav>
				<div
					class={this.props.position === 0?'active':''}
					onClick={e => this.props.changeSection(0)}
					>0</div>
				<div
					class={this.props.position === 1?'active':''}
					onClick={e => this.props.changeSection(1)}
					>1</div>
				<div
					class={this.props.position === 2?'active':''}
					onClick={e => this.props.changeSection(2)}
					>2</div>
				<div
					class={this.props.position === 3?'active':''}
					onClick={e => this.props.changeSection(3)}
					>3</div>
				<div
					class={this.props.position === 4?'active':''}
					onClick={e => this.props.changeSection(4)}
					>4</div>
				<div
					class={this.props.position === 5?'active':''}
					onClick={e => this.props.changeSection(5)}
					>5</div>
			</nav>
		);
	}
}