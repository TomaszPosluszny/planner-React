import React from 'react';

class AddPlanner extends React.Component {
	minDate = new Date().toISOString().slice(0, 10);
	state = {
		textraa: '',
		checked: false,
		date: this.minDate,
	};

	handleText = (e) => {
		this.setState({ textraa: e.target.value });
	};

	handleDate = (e) => {
		this.setState({ date: e.target.value });
	};

	handleCheckbox = (e) => {
		this.setState({ checked: e.target.value });
	};

	handleClick = () => {
		console.log('dodaj');
		const { textraa, checked, date } = this.state;
		const add = this.props.add(textraa, date, checked);
		if (add) {
			this.setState({
				textraa: '',
				checked: false,
				date: this.minDate,
			});
		}
	};
	render() {
		let maxDate = this.minDate.slice(0, 4) * 1 + 1;

		maxDate = maxDate + '-12-31';
		console.log(maxDate);

		return (
			<div className='list'>
				<div className='list__all'>
					<h1>Planer</h1>
					<div className='list__header'>
						<label htmlFor='date'>Do kiedy Zapłacić </label>
						<input
							className='list__date'
							type='date'
							value={this.state.date}
							min={this.minDate}
							max={maxDate}
							onChange={this.handleDate}
						/>
						<label htmlFor='important' className='list__important'>
							<input
								className='list__input'
								type='text'
								placeholder='Wpisz treść wydatku...'
								value={this.state.text}
								onChange={this.handleText}
							/>
							<input
								className='list__checkbox'
								type='checkbox'
								checked={this.state.checked}
								id='important'
								onChange={this.handleCheckbox}
							/>
							Piorytet
						</label>

						<button className='list__btn' onClick={this.handleClick}>
							dodaj
						</button>
					</div>
				</div>
			</div>
		);
	}
}



export default AddPlanner;
