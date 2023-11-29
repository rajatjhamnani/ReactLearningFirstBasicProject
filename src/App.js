import logo from './logo.svg';
import React  from 'react';
import './App.css';
import AddDetails from './components/AddDetails';
import InputDetails from './components/InputDetails';
import { useState } from 'react';


function App() {
  const [usersList , setUsersList]=useState([])
  const addedDetails=(uName , uAge , uCollege)=>{
    setUsersList((prevList)=>{
      return [...prevList ,{name:uName ,age:uAge ,college:uCollege ,id:Math.random().toString()}]
    })
  }
 


 
  
  
  return (
    <React.Fragment>
     <AddDetails onAddUser={addedDetails}/>
     <InputDetails users={usersList}/>
     
    </React.Fragment>
  );
}

export default App;
