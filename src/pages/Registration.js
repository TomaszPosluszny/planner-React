import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class Registration extends React.Component {
	state = {
		username: '',
		email: '',
		pass: '',
		accept: false,

		errors: {
			username: false,
			email: false,
			pass: false,
			accept: false,
		},
	};

	messages = {
		username_incorrect:
			'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji',
		email_incorrect: 'Brak @ w emilu',
		password_incorrect: 'Hasło musi mieć 8 zanków',
		accept_incorrect: 'Nie potwierdzona zgoda',
	};

	handleChange = (e) => {
		console.log(e.target.type);
		console.log(e.target.name);
		const type = e.target.type;
		const name = e.target.name;
		if (type === 'text' || type === 'password' || type === 'email') {
			const value = e.target.value;
			const checked = e.target.checked;
			this.setState({ [name]: value });
		} else if (type === 'checkbox') {
			const checked = e.target.checked;
			// const checked = e.target.checked
			console.log(checked);
			this.setState({ [name]: checked });
		}
	};
	handleSubmit = (e) => {
		e.preventDefault();
	
		const validation = this.formValidation()
		
		if (validation.correct) {
			this.setState({
				username: '',
				email: '',
				pass: '',
				accept: false,

				errors: {
					username: false,
				email: false,
				pass: false,
				accept: false,
				},
			}) 
			console.log('formularz wysłany');
		} else{
this.setState({
			errors: {
				username: !validation.username,
					email: !validation.email,
					pass: !validation.password,
					accept: !validation.accept,
				
			}})
		}
	};

	formValidation =()=>{
		let username = false;
		let email = false;
		let password = false;
		let accept = false;
		let correct = false;
		if(this.state.username.length> 10 &&  this.state.username.indexOf(' ') === -1){
			username = true
		}

		if(this.state.email.indexOf('@') !== -1){
			email = true
		}
		if(this.state.pass.length === 8){
			password = true
		}
		if(this.state.accept){
			accept = true
		}

		if (username && email && password && accept){
			correct = true
		}

		return ({
			correct,
			username,
			email,
			password,
			accept,
		})
		
	}
	render() {
		return (
			<div className='registration'>
				<form onSubmit={this.handleSubmit} noValidate>
					<label htmlFor='user'>
						Twoje imię:
						<input
							type='text'
							id='user'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						></input>
						{this.state.errors.username && (
							<span>{this.messages.username_incorrect}</span>
						)}
					</label>
					<label htmlFor='email'>
						Twój adres emil:
						<input
							type='email'
							id='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
						></input>
						{this.state.errors.email && (
							<span>{this.messages.email_incorrect}</span>
						)}
					</label>
					<label htmlFor='password'>
						Podaj Twoje hasło:
						<input
							type='password'
							id='password'
							name='pass'
							value={this.state.pass}
							onChange={this.handleChange}
						></input>
						{this.state.errors.pass && (
							<span>{this.messages.password_incorrect}</span>
						)}
					</label>
					<label htmlFor='accept'>
						<input
							type='checkbox'
							id='accept'
							name='accept'
							checked={this.state.accept}
							onChange={this.handleChange}
						/>
						Wyrażam zgodę na wszystko.
					</label>
					{this.state.errors.akcept && (
						<span>{this.messages.accept_incorrect}</span>
					)}
					<button>Zapisz się</button>
				</form>
				formularz
			</div>
		);
	}
}

export default Registration;
