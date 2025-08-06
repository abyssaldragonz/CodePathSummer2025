import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

export default function EditPost({data}) {
    const {id} = useParams()
    const [prop, setProp] = useState(null)
    const [newPost, setNewPost] = useState(null)

    useEffect(() => {
        console.log(data)
        const foundItem = Object.values(data).find(item => item.id == id)
        console.log(foundItem)
        setProp(foundItem)
        prop ? 
            setNewPost({title: data.title, author: data.author, content: data.content, image: data.image})
            :
            null
    },
    [data])

    
    const handleChange = (event) => {
        const {name, value} = event.target
        setNewPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async(event) => {
        event.preventDefault()
        await supabase
            .from('HobbyHub')
            .update({title: newPost.title, author: newPost.author, content: newPost.content, image: newPost.image})
            .eq('id', id)
        window.location = "/"
    }

    const deletePost = async(event) => {
        event.preventDefault()
        await supabase
            .from('HobbyHub')
            .delete()
            .eq('id', id)
        window.location = "/"
    }

    return prop && (
        <div>
            <form>
                <input style={{width: '50%'}} type="text" defaultValue={prop.title} id="title" name="title" placeholder='Title' onChange={handleChange} />
                <br />
                <br />

                <input style={{width: '50%'}} type="text" defaultValue={prop.author} id="author" name="author" placeholder='Author (optional)' onChange={handleChange} />
                <br />
                <br />

                <textarea defaultValue={prop.content} rows="25" cols="100" id="content" name="content" placeholder='Content (optional)' onChange={handleChange} />
                <br />
                <br />

                <input style={{width: '75%'}} type="text" defaultValue={prop.image} id="image" name="image" placeholder='Image URL (optional)' onChange={handleChange} />
                <br />
                <br/>

                <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
                    <button onClick={updatePost}>Edit Post</button>
                    <button onClick={deletePost}>Delete Post</button>
                </div>
            </form>
        </div>
    )
}