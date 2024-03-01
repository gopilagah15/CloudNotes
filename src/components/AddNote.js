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
    <>
    <div className="container mt-3   d-flex align-items-center justify-content-center" style={{width: '1650px', height:'300px'}}>
    <div className= "row ">
      <div className="col-md-4" style={{width: '1850px', height:'300px'}}>
    <h1 className="container mt-3" style={{width: '1650px', height:'300px', opacity:'0.6'}} >The most important thing is that your notes work for you. They should help you remember information, organize your thoughts, and understand complex topics more clearly. Keep your notes meaningful.</h1>
   
    </div>
    </div>
    </div>
    <img src="https://images.unsplash.com/photo-1605256585681-455837661b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5vdGVzfGVufDB8fDB8fHww" style={{width: '1650px', height:'300px', opacity:'0.5'}} alt="" />
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
   </>
  )
}

export default AddNote
