import React from 'react';

function Task(props) {

	const style = {
		color: 'red'
	}
	const { text,date, id, important } = props.task;

	return (
		<div>
			<p>
				<strong style= {important ? style : null}> {text}</strong> - do <span>{date} </span>
                <button onClick={() =>props.change(id)}> Zostało zrobione</button>
                <button onClick={() =>props.delete(id)} >X</button>
			</p>
		</div>
	);
	
	}


export default Task;
