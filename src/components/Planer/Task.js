import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Task(props) {
	const style = {
		color: 'red',
	};
	const { text, date, id, important } = props.task;

	return (
		<div className='todo'>
			<ul>
				<li>
					<strong style={important ? style : null}> {text}</strong>{' '}
					<span>{date} </span>
					<div className='todo__tools'>
						<button className='todo__complete' onClick={() => props.change(id)}>
							<FontAwesomeIcon icon='fa-solid fa-check' />
						</button>
						<button className='todo__edit'>EDIT</button>
						<button className='todo__delete' onClick={() => props.delete(id)}>
							<FontAwesomeIcon icon='fa-solid fa-xmark' />
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Task;
