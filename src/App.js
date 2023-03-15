import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <Navbar/>
        <div className="content">
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
