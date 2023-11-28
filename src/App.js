import logo from './logo.svg';
import './App.css';
import AddDetails from './components/AddDetails';
import InputDetails from './components/InputDetails';
import { useState } from 'react';


function App() {
  const [usersList , setUsersList]=useState([])
  const addedDetails=(uName , uAge)=>{
    setUsersList((prevList)=>{
      return [...prevList ,{name:uName ,age:uAge ,id:Math.random().toString()}]
    })
  }
 


 
  
  
  return (
    <div className="App">
     <AddDetails onAddUser={addedDetails}/>
     <InputDetails users={usersList}/>
     
    </div>
  );
}

export default App;
