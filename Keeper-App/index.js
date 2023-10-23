import React from "react"; 
import ReactDom from "react-dom"
import Note from "./Note";

// import App from "./App"; 
// import Emoji from "./Emoji";


ReactDom.render(
    <div> 
        <Note />  
   </div> , 
    document.getElementById("root")
)

















// import Header from "./Header"; 
// import Footer from "./Footer"; 
// import Note from "./Note"; 
// var React = require("react");
// var ReactDom = require("react-dom");


//     ReactDom.render(
//         <div> 
//         <Header /> 
//         <Footer />
//         <Note /> 
//         </div>, 
//         document.getElementById("root")
//     )


// import App from "./App";
// var React = require("react");
// var ReactDom = require("react-dom");

// ReactDom.render(
// <App />, 

// document.getElementById("root")
// ); 




// // ReactDom.render(
// //     <div> 
// //     <h2>My favourite foods</h2> 
// //     <ul>
// //         <li>Bacon</li>
// //         <li>Jamon</li>
// //         <li>Noodles</li>
// //     </ul>
// //     </div>, 
    
// //     document.getElementById("root")
// // )

// const fname = "Angela";
// const lname = "you"; 
// ReactDom.render(

//     <div>
// <h2>Hello {fname } {lname} </h2>
// <p>Your lucky number is 29</p>
//    </div>,
//    document.getElementById("root") 
// )

// const customStyle = {
//     color: "red",
//     fontSize: "20px",
//     border: "1px solid black"
// }

// const name = "Angela You"
// const currentDate = new Date(); 
// const year = currentDate.getFullYear();
// ReactDom.render(
//     <div>
//         <p style = {customStyle}> Created by {name}</p>
//         <p> Copyright {year} </p>
//     </div>,
//     document.getElementById("root")
// )

// const customeStyle = { 
// color : "",
// textDecorationLine : "Underline",
// }

// const currentDate = new Date(); 
// const currentTime = currentDate.getHours(); 
//  let greetings; 
//   if(currentTime < 12){
//     greetings = "Good Morning"
//     customeStyle.color = "red"
//  } else if (currentTime<18){
//     greetings = "Good Afternoon"
//     customeStyle.color = "green"
//  } else{
//     greetings = "Good night"
//     customeStyle.color = "blue"
//  }
// ReactDom.render(
// <h1 className = "heading" style = {customeStyle}>{greetings}</h1>,
//     document.getElementById("root")
// )


