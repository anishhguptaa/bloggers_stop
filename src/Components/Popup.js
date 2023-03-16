import React from 'react'
import "./PopupStyles.css"
import useFetch from "../useFetch";
import { useNavigate, useParams } from "react-router-dom";

function Popup(props) {

    const {id} = useParams();
    const navigate= useNavigate()
    const {data: blog} = useFetch('http://localhost:8000/blogs/'+id)
    const handleClick=()=>{
        fetch("http://localhost:8000/blogs/"+blog.id, {
            method: "DELETE"
        }).then(()=>{
            navigate("/")  
        })}

    return (props.trigger) ? ( 
        <div className="popup">
            <div className="popup-inner">
                <h3>Do you really want to delete this blog?</h3>
                <div className="popup-btns">
                    <button onClick={handleClick} style={{backgroundColor:"darkred", marginRight:"0.5rem"}} >Delete Blog</button>
                    <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"rgb(23, 112, 23)"}} >Cancel</button>
                </div>
            </div>
        </div>) : "" 
}

export default Popup