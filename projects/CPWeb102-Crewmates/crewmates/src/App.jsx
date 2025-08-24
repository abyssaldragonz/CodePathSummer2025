import { useState, useEffect } from 'react'
import {useLocation, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCrewmate from './pages/CreateCrewmate'
import CrewmateGallery from './pages/CrewmateGallery'
import EditCrewmate from './pages/EditCrewmate'

import { supabase } from './client'

function App() {	
	return (
		<div className="App">
			<h1>CREWMATES</h1>
			<Router basename="/">
				<Routes>
				<Route path='/' element= {<CreateCrewmate />} />
				<Route path='/gallery' element= {<CrewmateGallery />}/>
				<Route path='/edit/:id' element= {<EditCrewmate />}/>
				<Route path='*' element= {<CrewmateGallery />}/>
				</Routes>
			</Router>		
		</div>
	)
}

export default App
