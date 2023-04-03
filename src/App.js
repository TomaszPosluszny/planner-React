import React from 'react';
import './App.scss';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Route,  Routes  } from 'react-router-dom';


import Planer from './pages/Planer';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

function App() {
	return (

		<Router>
				<Nav />
				<Routes>
				<Route exact path="planner-react/" element={<Planer />}/>
				
          <Route exact path="/registration" element={<Registration/>}/>
		  <Route exact path="/login" element={<Login/>}/>
          
				{/* <Planer /> */}
				</Routes>
				<Footer />


				{/* </Routes> */}
				</Router>

	);
}

export default App;
