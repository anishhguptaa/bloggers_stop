import { Link } from "react-router-dom";
import "./BlogListStyles.css"

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2 className="blog-list-title">{title}</h2>
            <div className="blogs">
                {blogs.map((blog) => (
                    <div className="blog-snap" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="title">{blog.title}</h2>
                            <p className="author">Written by {blog.author}</p>                    
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        
     );
}
 
export default BlogList;