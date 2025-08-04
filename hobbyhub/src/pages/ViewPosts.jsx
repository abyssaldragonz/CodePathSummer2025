import { useState, useEffect } from 'react'
import Post from '../components/Post'
import { supabase } from '../client'

export default function ViewPosts(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(props.data);
        fetchPosts(); 
    }, [props])

    const fetchPosts = async() => {
        const {data} = await supabase
            .from('Posts')
            .select()
            .order('creation_time', { ascending: true })

            // set state of posts
            setPosts(data)
    }
    
    console.log(posts)
    return (
        <div className="feed">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post, index) => 
                    <Post 
                        key = {post.id}
                        prop = {post}
                    />
                ) : <h2>{'No Posts Yet 💔'}</h2>
            }
        </div>  
    )
}