import React from "react";
import Card from "./Card";
import './AddDetails.css'
import './InputDetails.css'
const InputDetails = (props) => {
  return (
<Card className="input">
    <ul >
      {props.users.map((user) => (
        <li key={user.id} className="li" >
          {user.name}({user.age} years old)
        </li>
      ))}
    </ul>
</Card>
  );
};
export default InputDetails;
