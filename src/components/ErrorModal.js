import React from "react";
import ReactDom from 'react-dom';
import Card from "./Card";
import  './ErrorModal.css';
const BackDrop= props =>{
    return <div className="backdrop" onClick={props.onConfirm}></div>
}

const ModalOverlay = props =>{
    return(
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

    )
}
const ErrorModal=(props)=>{
return (
    <React.Fragment>
{ReactDom.createPortal(<BackDrop onConfirm={props.removeModal}/>, document.getElementById('backdrop-root'))}
{ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} removeModal={props.removeModal}/> , document.getElementById('overlay-root'))}
</React.Fragment>
)
}
export default ErrorModal