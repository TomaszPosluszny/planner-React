import React from 'react';

class AddPlanner extends React.Component {
	minDate = new Date().toISOString().slice(0, 10);
	state = {
		text: '',
		checked: false,
		date: this.minDate,
	};

	handleText = (e) => {
		this.setState({text: e.target.value})
	}

	handleDate = (e) => {
		this.setState({ date: e.target.value });
	};

	handleCheckbox = (e) => {
		this.setState({checked: e.target.value})
	}

	handleClick  = () =>{}
	render() {
		let maxDate = this.minDate.slice(0, 4) * 1 + 1;
		// maxDate = maxDate + '-12-31';
		return (
			<div className='list__header'>
				<input
					type='text'
					placeholder='Dodaj zadanie'
					value={this.state.text}
					onChange={this.handleText}
				/>
				<input type='checkbox' checked={this.state.checked} id='important' onChange={this.handleCheckbox} />
				<label htmlFor='important'>Piorytet</label>
				<label htmlFor='date'>Do kiedy zrobić</label>
				<input
					type='date'
					value={this.state.date}
					min={this.minDate}
					max={this.maxDate}
					onChange={this.handleDate}
				/>
				<button onChange={this.handleClick}>Dodaj</button>
			</div>
		);
	}
}

// function AddPlanner (){
//     return(
// <div className="list__header">
//     <div>Dodaj task</div></div>

//     )

export default AddPlanner;
