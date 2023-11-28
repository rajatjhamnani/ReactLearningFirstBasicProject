import React from "react";
import Card from "./Card";
import  './ErrorModal.css'
const ErrorModal=(props)=>{
return (
<div>
    <div className="backdrop" onClick={props.removeModal}>
<Card className="modal">
    <header className="header">
        <h2>{props.title}</h2>
    </header>
    <div className="content">
        <p>{props.message}</p>
      
    </div>
    <footer className="actions">
        <button onClick={props.removeModal}>okay</button>
    </footer>
</Card>
</div>
</div>
)
}
export default ErrorModal