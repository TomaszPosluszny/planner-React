import React from 'react';
import '../components/Login/Form.scss'
import Validator from '../components/Registration/Validator';

class Registration extends React.Component {
	render() {
		return (
			<div className='area'>
				<Validator />
				</div>
			
		);
	}
}

export default Registration;
