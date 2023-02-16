import React from 'react';
import './App.css';
import AddPlaner from './AdPlaner';
import ListPlanner from './ListPlanner';

class App extends React.Component {
	state = {
		tasks: [
			{
				id: 0,
				text: 'Rata za Dom',
				date: '2023-02-15',
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 1,
				text: 'Rata za Auto',
				date: '2023-03-16',
				important: true,
				active: true,
				finishDate: null,
			},
		],
	};
	deleteTask = (id) => {
		console.log('delete App'+ id);
	};
  changeTaskStatus = (id) => {
		console.log('change' + id);
	};

	render() {
		return (
			<div className='App'>
				PLANER
				<AddPlaner />
				<ListPlanner tasks={this.state.tasks} delete={this.deleteTask} change = {this.changeTaskStatus} />
			</div>
		);
	}
}

export default App;
