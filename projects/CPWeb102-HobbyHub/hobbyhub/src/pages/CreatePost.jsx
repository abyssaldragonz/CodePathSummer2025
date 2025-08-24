import { useState } from 'react'
import { supabase } from '../client'

export default function CreatePost() {
    const [newPost, setPost] = useState({title: "", author: "Anonymous", content: "", image: "", upvotes: 0, comments: []})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async(event) => {
        event.preventDefault()
        await supabase
            .from('HobbyHub')
            .insert({title: newPost.title, author: newPost.author, content: newPost.content, image: newPost.image, upvotes: newPost.upvotes, comments: newPost.comments})
            .select()

        window.location = "/"
    }

    return (
        <div className='createPost'>
            <form>
                <input style={{width: '50%'}} type="text" id="title" name="title" placeholder='Title' onChange={handleChange} />
                <br />
                <br />

                <input style={{width: '50%'}} type="text" id="author" name="author" placeholder='Author (optional)' onChange={handleChange} />
                <br />
                <br />

                <textarea rows="25" cols="100" id="content" name="content" placeholder='Content (optional)' onChange={handleChange} />
                <br />
                <br />

                <input style={{width: '75%'}} type="text" id="image" name="image" placeholder='Image URL (optional)' onChange={handleChange} />
                <br />
                <br/>

                <button onClick={createPost}>Create Post!</button>
            </form>
        </div>
    )
}