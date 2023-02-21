import React from 'react';

import Task from './Task';

function ListPlanner(props) {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} 
		delete={props.delete} 
		/>)
	return (<>
		<div className='list__active'>
			<h1>Zadania do zrobienia</h1>
            {tasks.length > 0 ? tasks : <p>brak zadań</p>}
		</div>
        <hr/>
      
</>
	);
}

export default ListPlanner;
