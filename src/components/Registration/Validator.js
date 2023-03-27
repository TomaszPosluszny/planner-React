import React from 'react';

class Validator extends React.Component {
	state = {
		username: '',
		email: '',
		pass: '',
		accept: false,
		message:'',

		errors: {
			username: false,
			email: false,
			pass: false,
			accept: false,
			
		},
	};

	messages = {
		username_incorrect:
			'Nazwa musi być dłuższa niż 10',
		email_incorrect: 'Brak @ w emilu',
		password_incorrect: 'Hasło musi mieć 8 zanków zanków',
		accept_incorrect: 'Nie potwierdzona zgoda',
	};

	handleChange = (e) => {
		console.log(e.target.type);
		console.log(e.target.name);
		const type = e.target.type;
		const name = e.target.name;
		if (type === 'text' || type === 'password' || type === 'email') {
			const value = e.target.value;
			// const checked = e.target.checked;
			this.setState({ [name]: value });
		} else if (type === 'checkbox') {
			const checked = e.target.checked;
			// const checked = e.target.checked
			
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
				message: 'Zarejestrowano pomyślnie :)',

				errors: {
					username: false,
				email: false,
				pass: false,
				accept: false,
				},
			}) 
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
		if(this.state.username.length> 10 ){
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
			<div className='area__all' >
				<form onSubmit={this.handleSubmit} noValidate>
				<h2>Zarejestrój się !</h2>
					<label className='area__box' htmlFor='user'>
						Twoje imię:
						<input
							type='text'
							id='user'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						></input>
						{this.state.errors.username && (
							<div className='area__box--error'>{this.messages.username_incorrect}</div>
						)}
					</label>
					<label className='area__box' htmlFor='email'>
						Twój adres emil:
						<input
							type='email'
							id='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
						></input>
						{this.state.errors.email && (
							<div className='area__box--error'>{this.messages.email_incorrect}</div>
						)}
					</label>
					<label className='area__box' htmlFor='password'>
						Podaj Twoje hasło:
						<input
							type='password'
							id='password'
							name='pass'
							value={this.state.pass}
							onChange={this.handleChange}
						></input>
						{this.state.errors.pass && (
							<div className='area__box--error'>{this.messages.password_incorrect}</div>
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
					{this.state.errors.accept && (
						<div className='area__box--error'>{this.messages.accept_incorrect}</div>
					)}
					<button className='area__buttons--send'>Wyślij</button>
				</form>
				<button className='area__buttons--clear' onClick={() => this.setState({
				username: '',
				pass: '',
				message: '',
				email: '',
				accept: false,
				})}>Wyczyść</button>
				{this.state.message && <h3>{this.state.message}</h3>}
			</div>
		);
	}
}

export default Validator;