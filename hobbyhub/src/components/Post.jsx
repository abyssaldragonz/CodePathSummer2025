import {useState, useEffect} from 'react'
import { supabase } from '../client'

export default function Post({prop}) {
    const [postDate, setPostDate] = useState(new Date(prop.creation_time)) 

    const updateUpvote = async(event) => {
        event.preventDefault()
        await supabase
            .from('HobbyHub')
            .update({title: newPost.title, author: newPost.author, content: newPost.content, image: newPost.image, upvotes: newPost.upvotes, comments: newPost.comments})
            .eq('id', data.id)
        window.location = "/"
    }

    return (
        <div className="card">
            <h3>Posted {postDate.toUTCString()}</h3>
            <h1>{prop.title}</h1>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h3>{prop.upvotes} upvotes</h3>
                {prop.comments && (Object.keys(prop.comments).length != 0) ?
                    <h3>{prop.comments.length} comments</h3>
                    :
                    <h3>No comments</h3>
                }
            </div>

        </div>
    )
}