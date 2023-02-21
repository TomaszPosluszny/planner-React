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
				important: false,
				active: true,
				finishDate: null,
			},
		],
	};
	deleteTask = (id) => {
// const tasks = [...this.state.tasks]
// const index = tasks.findIndex(task => task.id === id)
// tasks.splice (index, 1)
// this.setState({tasks})

let tasks = [...this.state.tasks];
tasks = tasks.filter(task => task.id !==id)
this.setState({tasks})


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
