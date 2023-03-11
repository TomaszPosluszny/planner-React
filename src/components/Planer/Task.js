import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Task extends React.Component {
	state = {
		active: false,
		edit: false,
	};
	render() {
		const style = {
			color: 'red',
		};
		const on = {
			color: 'gray',
			'text-decoration': 'line-through',
			'font-size': '10px',
		};
		// const of = { color: 'green' };
		const edit = { display: 'flex' };

		const { text, date, id, important } = this.props.task;

		return (
			<div className='todo'>
				<ul>
					<li>
						<strong style={important ? style : null}>
							<span style={this.state.active ? on : null}> {text}</span>
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
								className='todo__edit'
								onClick={() => this.setState({ edit: !this.state.edit })}
							>
								EDIT
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
				<div className='edit' style={this.state.edit ? edit : null}>
					<h3>Edytuj zadanie:</h3>
					<div className='edit__body'>
					<p className="edit__info"></p>
					<input type="text" className="edit__input" placeholder="Wprowadź nową treść zadania..."></input>
                    <button className="edit__btn accept">Zatwierdź</button>
                    <button className="edit__btn cancel" style={this.state.edit ? null : edit} onClick={() => this.setState({ edit: !this.state.edit })}>Anuluj</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
