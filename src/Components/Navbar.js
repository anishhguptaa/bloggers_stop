import { Link } from "react-router-dom";
import "./NavbarStyles.css"

const Navbar = () => {
    return ( 
        <nav>
            <Link to={"/"}><h1>Bloggers Stop</h1></Link>
            <div className="links">
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;