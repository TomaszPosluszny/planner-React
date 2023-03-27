import React from 'react';

import'./Form.scss';

class Form extends React.Component {
	state = {
		username: '',
		pass: '',

		message: '',

		errors: {
			username: false,
			pass: false,
			message: false,
		},
	};

	messages = {
		username_incorrect: 'Wpisz dane do logowania :)',
	};

	handleChange = (e) => {
		const type = e.target.type;
		const name = e.target.name;
		if (type === 'text' || type === 'password') {
			const value = e.target.value;
			// const checked = e.target.checked;
			this.setState({ [name]: value });
		} else if (type === 'checkbox') {
			const checked = e.target.checked;
			// const checked = e.target.checked

			this.setState({ [name]: checked });
		}
	};
	
	handleClear = () =>{

		this.setState({
			username: '',
			pass: '',
			
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();

		const validation = this.formValidation();

		if (validation.correct) {
			this.setState({
				username: '',
				pass: '',
				message: 'Pomyślnie zalogowano :)',

				errors: {
					username: false,
					pass: false,
				},
			});
		} else {
			this.setState({
				errors: {
					username: !validation.username,

					pass: !validation.password,
				},
			});
		}
	};

	formValidation = () => {
		let username = false;

		let password = false;

		let correct = false;
		if (this.state.username.length > 1) {
			username = true;
		}

		if (this.state.pass.length > 1) {
			password = true;
		}

		if (username && password) {
			correct = true;
		}

		return {
			correct,
			username,

			password,
		};
	};

	render() {
		return (
			
			<div className='area__all' >
				<form onSubmit={this.handleSubmit} noValidate>
					<h2>Zalogój się !</h2>
					<label  className='area__box' htmlFor='user'>
						Twoje imię:
						<input
							type='text'
							id='user'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						></input>
					</label>

					<label  className='area__box' htmlFor='password'>
						Podaj Twoje hasło:
						<input
							type='password'
							id='password'
							name='pass'
							value={this.state.pass}
							onChange={this.handleChange}
						></input>
					</label>

					<button className='area__buttons--send'>Wyślij</button>
					
				</form>
				<button className='area__buttons--clear' onClick={() => this.setState({
				username: '',
				pass: '',
				message: '',
				})}>Wyczyść</button>
				
				{this.state.message && <h3>{this.state.message}</h3>}
				{this.state.errors.username && (
					<span>{this.messages.username_incorrect}</span>
				)}
			</div>
			
		);
	}
}

export default Form;
