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
							{/* <button
								className='todo__edit'
								onClick={() => this.setState({ edit: !this.state.edit })}
							>
								EDIT
							</button> */}
							<button
								className='todo__delete'
								onClick={() => this.props.delete(id)}
							>
								<FontAwesomeIcon icon='fa-solid fa-xmark' />
							</button>
						</div>
					</li>
				</ul>
				{/* <div className='edit' style={this.state.edit ? edit : null}>
					<h3>Edytuj zadanie:</h3>
					<div className='edit__body'>
					<p className="edit__info"></p>
					<input type="text" className="edit__input" placeholder="Wprowadź nową treść zadania..." value={this.state.editText}
								onChange={this.handleText}></input>
                    <button className="edit__btn accept"onClick={() => this.setState({ edit: !this.state.edit })} >Zatwierdź</button>
                    <button className="edit__btn cancel" style={this.state.edit ? null : edit} onClick={this.handleClickk}>Anuluj</button>
					</div>
				</div> */}
			</div>
		);
	}
}

export default Task;
