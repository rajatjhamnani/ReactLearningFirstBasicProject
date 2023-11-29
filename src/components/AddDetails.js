import React ,{useState ,useRef} from "react";
import Card from "./Card";
import './AddDetails.css'
import './Button.css'
import ErrorModal from "./ErrorModal";


const AddDetails=(props)=>{

const collegeNameRef=useRef() //using ref for college name


	const [changedName , setChangedName]=useState('')
	const [changedAge , setChangedAge]=useState('')
	const [error , setError]=useState('')
	const nameChange=(event)=>{
		setChangedName(event.target.value)
	}
	const ageChange=(event)=>{
		setChangedAge(event.target.value)
	}
	 const submitHandler=(event)=>{
		event.preventDefault()
	    const enteredCollegeName=collegeNameRef.current.value
		let enteredData={
			enteredName:changedName,
			enteredAge:changedAge
		}
		if(changedName.trim().length===0||changedAge.trim().length===0 || enteredCollegeName.trim().length===0){
			setError({
				title :'invalid input',
				message:'please enter the valide name , age and college name(non-empty values)'
			})
			return
		}
		if(changedAge<1){
			setError({
				title :'invalid Age',
				message:'please enter the valide  age(greater than 0)'
			})
			return 
		}
		props.onAddUser(changedName , changedAge , enteredCollegeName)
		collegeNameRef.current.value=''
		setChangedName('')
		setChangedAge('')
		
	 }
	 const errorHandler=()=>{
		setError(null)
		
	 }

return (
	<div>
	{error && <ErrorModal removeModal={errorHandler}title={error.title} message={error.message}/>}
	<Card className="input" >
	<form  onSubmit={submitHandler}>
	<div>
	<div >
		<label className="">Write Name</label>
		<input  type='text' value={changedName} onChange={nameChange}/>
	</div>
	<div>
		<label>Write Age</label>
		<input  type='number' value={changedAge} min='0' step='1' onChange={ageChange}/>
	</div>
	<div>
		<label>College Name</label>
		<input  type='text' ref={collegeNameRef} />
	</div>
	<button className="button" type='submit'>Add Details</button>
	</div>
	</form>
	</Card>
	</div>
	
)
    

}
export default AddDetails