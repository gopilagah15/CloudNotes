import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  const {showAlert} = props
  return (
   <div className="container my-3">
    <div className="container my-3">
      <h2>Add a note</h2>
    </div>
    <Notes  showAlert ={showAlert}/>
    
    
   </div>
  )
}

export default Home
