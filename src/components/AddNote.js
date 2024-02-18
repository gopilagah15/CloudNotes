import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
  
  const context = useContext(noteContext);
  const {addNote} = context;
  const[note,setNote] = useState({title:"", description:"", tag:""});
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    props.showAlert("Note added successfully" ,"success");
  }
 const onChange =(e)=>{
    setNote({...note,[e.target.name]:e.target.value});
  }
  return (
   <div className="container">
    <form action=""> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' onChange={onChange} aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onChange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputTag1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}   />
  </div>
  
  <button onClick={handleClick}  type="submit" className="btn btn-primary"  >Add Note</button>
</form> 
   </div>
  )
}

export default AddNote
