import React from "react"; 
import NoteCompo from "./NoteCompo"; 

function Noteentry(props) { 
    return ( 
        <div className = "container"> 
            <h1 className = "title"> {props.title}</h1>
            <p className = "content"> {props.content} </p>
        </div> 
    )
}

export default Noteentry; 