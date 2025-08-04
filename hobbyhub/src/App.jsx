import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ViewPosts from './pages/ViewPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'


export default function App() {
	const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

	const posts = [
	{'id':'1', 
	'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
	'author':'Harvey Milian', 
	'description': descr},
	{'id':'2', 
	'title': 'Love Lock in Paris 🔒',
	'author':'Beauford Delaney', 
	'description':descr},
	{'id':'3', 
	'title': 'Wear Pink on Fridays 🎀',
	'author':'Onika Tonya', 
	'description':descr},
	{'id':'4', 
	'title': 'Adopt a Dog 🐶',
	'author':'Denise Michelle', 
	'description':descr},
	]


	// Sets up routes
	let element = 
	useRoutes([
		{
			path: "/",
			element:<ViewPosts data={posts} />
		},
		{
			path:"/edit/:id",
			element: <EditPost data={posts} />
		},
		{
			path:"/new",
			element: <CreatePost />
		}
	]);

	return ( 
	<div className="App">
		<h1 style={{fontWeight: 'bolder'}}>🩵 HobbyHub 🩵</h1>
		<div className="header">
			<Link to="/"><button className="headerBtn"> For You Feed 👑 </button></Link>
			<Link to="/new"><button className="headerBtn"> Create New Post ✒️ </button></Link>
		</div>
			{element}
	</div>

	)
}
