import React from 'react';

function Task(props) {
	const { text,date, id } = props.task;
	return (
		<div>
			<p>
				<strong>{text}</strong> - do <span>{date} </span>
                <button onClick={() =>props.change(id)}> Zostało zrobione</button>
                <button onClick={() =>props.delete(id)} >X</button>
			</p>
		</div>
	);
}

export default Task;
