import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Task extends React.Component {
	state = {
		active: false,
		edit: false,
		
	};
	handleText = (e) => {
		this.setState({ editText: e.target.value });
	};
	
	
	
	render() {
		const style = {
			color: 'red',
		};
		const on = {
			color: 'gray',
			textDecoration: 'line-through',
			fontSize: '10px',
		};
		// const of = { color: 'green' };
		// const edit = { display: 'flex' };

		const { text, date, id, important,} = this.props.task;

		return (
			<div className='todo'>
				<ul>
					<li>
						<strong style={important ? style : null}>
							<span style={this.state.active ? on : null}> {text} </span>
						</strong>{' '}
						<span style={this.state.active ? on : null}>{date} </span>
						<div className='todo__tools'>
							<button
								className='todo__complete'
								onClick={() => this.setState({ active: !this.state.active })}
							>
								<FontAwesomeIcon icon='fa-solid fa-check' />
							</button>
							
							<button
								className='todo__delete'
								onClick={() => this.props.delete(id)}
							>
								<FontAwesomeIcon icon='fa-solid fa-xmark' />
							</button>
						</div>
					</li>
				</ul>
				
			</div>
		);
	}
}

export default Task;
