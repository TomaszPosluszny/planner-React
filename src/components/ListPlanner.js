import React from 'react';

import Task from './Task';

function ListPlanner(props) {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
	return (<>
		<div className='list__active'>
			<h1>Zadania do zrobienia</h1>
            {tasks}
		</div>
        <hr/>
        <div className='list__done'>
			<h1>Zadania zrobione</h1>		
		</div>
</>
	);
}

export default ListPlanner;
