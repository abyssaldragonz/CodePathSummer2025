import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Post from './components/Post'
import ViewPosts from './pages/ViewPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostPage from './pages/PostPage'
import { Link } from 'react-router-dom'
import { supabase } from './client'


export default function App() {
	const [bgColor, setColor] = useState("#242424")
	const [posts, setPosts] = useState([])

	// Sets up routes
	let element = 
	useRoutes([
		{
			path: "/",
			element: <ViewPosts />
		},
		{
			path:"/edit/:id",
			element: <EditPost data={posts} />
		},
		{
			path:"/post/:id",
			element: <PostPage data={posts} />
		},
		{
			path:"/new",
			element: <CreatePost />
		}
	]);


	useEffect(() => {
		setPosts({});
		fetchPosts(); 
	}, [])

	const fetchPosts = async() => {
		const {data} = await supabase
			.from('HobbyHub')
			.select()

			// set state of posts
			setPosts(data)
	}


	return ( 
	<div className="App" style={{backgroundColor: bgColor}}>
		<h1 style={{fontWeight: 'bolder'}}>🩵 HobbyHub 🩵</h1>
		<div className="header">
			<div className='psuedobutton'>
				<label>Change Background Color: </label>
				<input type="color" value={bgColor} onChange={(event) => {setColor(event.target.value); document.body.style = `background: ${event.target.value}`;}} />
			</div>
			<Link to="/"><button className="headerBtn"> For You Feed 👑 </button></Link>
			<Link to="/new"><button className="headerBtn"> Create New Post ✒️ </button></Link>
		</div>
			{element}  
	</div>
	)
}
