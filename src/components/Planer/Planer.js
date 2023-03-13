import React from 'react';
import './Planer.scss';
import AddPlaner from './AdPlaner';
import ListPlanner from './ListPlanner';

class Planer extends React.Component {
	counter = 2;
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
				active: false,
				finishDate: null,
			},
		],
	};
	deleteTask = (id) => {
		let tasks = [...this.state.tasks];
		tasks = tasks.filter((task) => task.id !== id);
		this.setState({ tasks });
	};
	changeTaskStatus = (id) => {
		console.log("jest zmiana");
		const tasks = Array.from(this.state.tasks);
		tasks.forEach(task =>{if(task.id === id){task.active = false}})

	};
	object;
	AddPlaner = (text, date, important) => {
		// console.log('donany task');
		const task = {
			id: this.counter,
			text: text,
			date: date,
			important: important,
			active: true,
			finishDate: null,
		};
		this.counter++;
		console.log(task, this.counter);
		this.setState((prevState) => ({
			tasks: [...prevState.tasks, task],
		}));
		return true;
	};



	render() {
		return (
			<div>
				<AddPlaner add={this.AddPlaner}
				git />
				<ListPlanner
					tasks={this.state.tasks}
					delete={this.deleteTask}
					change={this.changeTaskStatus}
					add={this.AddPlaner}
				/>
				
			</div>
		);
	}
}
export default Planer;
