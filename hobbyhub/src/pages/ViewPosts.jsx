import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { supabase } from '../client'

export default function ViewPosts(props) {
    const [posts, setPosts] = useState([])
    const [postFilter, setFilter] = useState("creation_time")
    const [searchPosts, setSearchPosts] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        setPosts(props.data);
        fetchPosts(); 
    }, [props])

    const fetchPosts = async() => {
        const {data} = await supabase
            .from('HobbyHub')
            .select()
            .order("creation_time", { ascending: false })

            // set state of posts
            setPosts(data)
            setSearchPosts(data)
    }

    function handleSearch(param) {
        setSearch(param)
        console.log(param)
        var filteredPosts = []

        filteredPosts = [...posts]
            .filter((objectData) => 
                (objectData.title.includes(param) || objectData.title.includes(param.toUpperCase()))
            )
            .sort((a, b) => a.id - b.id) 
        console.log(filteredPosts)
        setSearchPosts(filteredPosts)
    }

    function handleChange(filteringParam) {
        setFilter(filteringParam)
        console.log(filteringParam)
        var filteredPosts = []

        if (filteringParam=="upvotes") {
            filteredPosts = [...posts]
                .sort((a, b) => b.upvotes - a.upvotes )
            document.getElementById('filterTime').style.backgroundColor = "#1a1a1a" 
            document.getElementById('filterVote').style.backgroundColor = "gray" 
        }
        
        else if (filteringParam=="creation_time") {
            filteredPosts = [...posts]
                .sort((a, b) => b.creation_time - a.creation_time ) 
            document.getElementById('filterVote').style.backgroundColor = "#1a1a1a" 
            document.getElementById('filterTime').style.backgroundColor = "gray" 
        }
        setSearchPosts(filteredPosts)
    }

    return (
        <div className="feed">
            <div className='header'>
                <button id="filterTime" style={{height: 'fit-content', margin: 'auto', backgroundColor: 'gray'}} onClick={()=>{handleChange("creation_time")}}>Newest</button>
                <input className='comments' style={{textAlign: 'center', color: 'white', backgroundColor: '#1a1a1a', width: '50%'}} placeholder='🔍 Search 🔎' onChange={(event) => {handleSearch(event.target.value)}} />
                <button id="filterVote" style={{height: 'fit-content', margin: 'auto'}} onClick={()=>{handleChange("upvotes")}}>Most Popular</button>
            </div>

            {
                searchPosts && searchPosts.length > 0 ?
                [...searchPosts]
                .map((post, index) => 
                    <Link to={`/post/${post.id}`} prop={post} key={post.id}>
                        <Post 
                            key = {post.id}
                            prop = {post}
                        />
                    </Link>
                ) : <h2>{'No Posts Yet 💔'}</h2>
            }
        </div>  
    )
}