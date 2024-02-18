import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host="http://localhost:5000"
    const notesInitials=[]
      const [notes,setNotes] = useState(notesInitials);

      //get all notes
      const getNotes =async() =>{
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",    
             headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
             }, 
                 });
        const json = await response.json();  
        console.log(json);
        setNotes(json);
       
      }

      //add a note
      const addNote =async(title,description,tag) =>{
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",    
             headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
             }, 
                 body: JSON.stringify({title,description,tag}),  
                 });
        const json = await response.json();  
        console.log(json);
        const note={
          "_id": "65d1a297cc36f1ef2403cb87",
          "user": "65d0735af6f510e9dd3c766c",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-02-18T06:24:23.842Z",
          "__v": 0
        }
        
        setNotes(notes.concat(note))
      }
      //delete a note
      const deleteNote =async(id) =>{
           //API Call

           const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",    
               headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token'),
               }, 
                   });
          const json = await response.json();  
          console.log(json);
          setNotes(json);

        //edit in client
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNotes(newNote);
      }
      //edit a note
      const editNote =async(id,title,description,tag) =>{
        //API Call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",    
             headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
             }, 
                 body: JSON.stringify({title,description,tag}),  
                 });
        const json = await response.json();  
        console.log(json);
        setNotes(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        //edit in client
        for(let index = 0; index <newNotes.length; index++){
          const element = newNotes[index];
          if(element._id ===id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    return(
        <NoteContext.Provider value={{notes,setNotes,getNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;