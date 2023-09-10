import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Create = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const  history =useNavigate();
    
    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log("clicked");
        axios.post("https://648867b90e2469c038fda74a.mockapi.io/crud-project",{
            name:name,
            email:email,
            
        })
      .then(()=>{
            history("/read");
        });
    };
  
  
  
return (
    <>
       
<div >
<h2>Create Data</h2>
  <Link to="/read">
  <button className='btn btn-primary'>Show Data</button>
  </Link>
    
        <form >
        <br></br>
            <div className='flex flex-col'>
                <label>Name=</label>
                <input name='name' type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <br></br>
            <div className='flex flex-col'>
                <label>Email=</label>
                <input name='email' type="text" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <br></br>
            <button type='submit' onClick={handelSubmit} > Submit</button>
        </form>
    </div>
    </>
  )
}
export default Create;
