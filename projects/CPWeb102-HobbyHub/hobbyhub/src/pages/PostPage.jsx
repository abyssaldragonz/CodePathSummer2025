import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client'
import logo from '../assets/loading.gif'

export default function PostPage({data}) {
    const { id } = useParams();
    const [prop, setProp] = useState(null)
    const [postDate, setPostDate] = useState(null) 
    const [newComment, setComment] = useState("")
    const [count, setNewCount] = useState(0)

    useEffect(() => {
        const foundItem = Object.values(data).find(item => item.id == id)
        setProp(foundItem)
        prop ? setPostDate(new Date(foundItem.creation_time)) : null
        prop ? setNewCount(prop.upvotes) : null
    },
    [data])

    const updateCount = async(event) => {
        event.preventDefault();

        await supabase
            .from('HobbyHub')
            .update({upvotes: count + 1})
            .eq('id', prop.id)

        setNewCount((count) => count + 1);
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setComment( (prev) => {
            return {
                ...prev,
                value,
            }
        })
    }

    const updateEntry = async(event) => {
        event.preventDefault()
        const newCommentsArray = prop.comments ? prop.comments : []
        console.log(prop.comments)
        newComment.value ? newCommentsArray.push(newComment.value) : null
        await supabase
            .from('HobbyHub')
            .update({comments: newCommentsArray})
            .eq('id', prop.id)
        console.log(newCommentsArray)
        window.location = `/post/${prop.id}`
    }


    return (prop && postDate) ? (
        <div className="card"> 
            <Link to={`/edit/${prop.id}`} prop={data}><button >Edit Post</button></Link>
            <hr />
            <h3>Posted {postDate.toUTCString()}</h3>
            <h2>By {prop.author}</h2>
            <h1>{prop.title}</h1>

            <p style={{whiteSpace: 'pre-line'}}>{prop.content}</p>
            { prop.image ? 
                <img src={prop.image} />
                :
                <img />
            }

            <hr />
            
            <button onClick={updateCount}>👍{count} upvotes👍</button>

            { prop.comments ?
                <div>
                    <h2>Comments!</h2>
                    {prop.comments.map((comm, index) => 
                        <p key={index} className="comments">{comm}</p>
                    )}
                </div>
                : 
                <h2>{'No Comments Yet 💔'}</h2>
            }

            <input className='comments' style={{backgroundColor: 'aliceblue', color: "black"}} type="text" id="comment" name="comment" placeholder='Leave a Comment' onChange={handleChange} />
            <button onClick={updateEntry}>Submit Comment</button>

        </div>
    )
    :
    (<div>
        <h1>LOADING...</h1>
        <img src={logo} alt="loading..." />
    </div>)
}