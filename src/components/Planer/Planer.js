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
				active: true,
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
		console.log(id.target);

		const Tom = document.querySelector('todo__complete');
		console.log(Tom);
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
				<AddPlaner add={this.AddPlaner} />
				<ListPlanner
					tasks={this.state.tasks}
					delete={this.deleteTask}
					change={this.changeTaskStatus}
				/>
				
			</div>
		);
	}
}
export default Planer;
