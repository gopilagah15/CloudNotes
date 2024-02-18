import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  let navigate = useNavigate();
  const {showAlert} = props;
    const context = useContext(noteContext);
    const {notes,getNotes,editNote} = context;
    const [note,setNote] = useState({id:"",etitle:"", edescription:"", etag:""});
    const ref = useRef(null);
    const refClose = useRef(null);
    useEffect(()=>{
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
        navigate('/login')
      }
      // eslint-disable-next-line
    },[]);
    const updateNote =(currentNote)=>{
      ref.current.click();
      setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description,etag:currentNote.tag})
    }
    const handleClick =(e)=>{
      e.preventDefault();
      refClose.current.click();
      editNote(note.id,note.etitle,note.edescription,note.etag);
      props.showAlert("   Note Updated successfully" ,"success");

    }
    const onChange =(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>

    <AddNote  showAlert ={showAlert}/>

<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        

   <form action=""> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name='etitle' onChange={onChange} value={note.etitle}  aria-describedby="emailHelp"/>
     </div>
   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputTag1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag}  />
  </div>
   
</form> 








      </div>
      <div className="modal-footer">
        <button ref= {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick ={handleClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>

    <div className="row">
        <h4>You notes</h4>
    {notes.map((note)=>{
      return <NoteItem  showAlert ={showAlert}  updateNote={updateNote} note={note}/>;
    })}
    </div>
    </>
  )
}

export default Notes
