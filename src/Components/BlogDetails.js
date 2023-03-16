import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "./BlogDetailsStyles.css"
import { Link } from "react-router-dom";
import Popup from "./Popup";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id)
    const [confirm, setConfirm] = useState(false)
    
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                    <Link to={"/"} ><button className="home-btn">Home</button></Link>
                    <button onClick={() => setConfirm(true)}>Delete Blog</button>
                </article>
            )}
            <Popup trigger={confirm} setTrigger={setConfirm}/>
        </div>
     );
}
 
export default BlogDetails;