import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h2>Sorry</h2>
            <div>The page you're looking for could not be found.</div>
            <Link to="/">Go to HomePage</Link>
        </div>
    );
}
 
export default PageNotFound;