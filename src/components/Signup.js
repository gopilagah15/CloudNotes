import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    let navigate = useNavigate();
    const[credentials,setCredentials] = useState({name:"",email:"",password:""});
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",    
               headers: {
              "Content-Type": "application/json",
               }, 
                   body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}),  
                   });
          const json = await response.json();  
          console.log(json);
          if(json.success){
            localStorage.setItem("token", json.authtoken);
            navigate('/home');
            props.showAlert("   Signed in successfully" ,"success");
          }
          else{
            props.showAlert("   Try with correct credentials" ,"danger");
          }
    }

   
    const onChange=(e)=>{
            setCredentials({...credentials,[e.target.name]:e.target.value});
    }
  return (
   <div className='container my-3'>
    <form onSubmit={handleSubmit}> 

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
 </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

   </div>
  )
}

export default Signup











