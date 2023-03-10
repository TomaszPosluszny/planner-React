import React from 'react';

import Task from './Task';

// import './planner.css'

function ListPlanner(props) {
	const tasks = props.tasks.map((task) => (
		<Task key={task.id} task={task} delete={props.delete} change={props.change}/>
	));
	return (
		<>	<div className='list'>
			<div className='list__all'>
				<h1 className='todo__list'>Lista zadań </h1>
								{tasks.length > 0 ? tasks : <p className='todo__alert'>brak zadań</p>}
			</div></div>

			<hr />
		</>
	);
}

export default ListPlanner;
