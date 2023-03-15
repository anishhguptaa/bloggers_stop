import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateStyles.css"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState("")
    const [isPending, setIsPending] = useState(false)
    const navigate=useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        setIsPending(true)
        const blog = {title, body, author};
        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false)
            navigate('/')
        })
    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Author:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                    type= "textarea"
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                {!isPending && <button>Add The Blog!</button>}
                {isPending && <button disabled>Adding Your Blog ...</button>}
            </form>
            {author && <p>Hello, {author}!</p>}
        </div>
    );
}
 
export default Create