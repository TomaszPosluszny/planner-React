import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class Registration extends React.Component {
	state = {
		username: '',
		email: '',
		pass: '',
		accept: false,
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
		console.log('działa');
	};
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
					<button>Zapisz się</button>
				</form>
				formularz
			</div>
		);
	}
}

export default Registration;
