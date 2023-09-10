import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Update = () => {
 const[id,setId]=useState(0);
 const[name,setName]=useState("");
 const[email,setEmail]=useState(""); 
 const navigate=useNavigate();


 useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
 },[]);


const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://648867b90e2469c038fda74a.mockapi.io/crud-project/${id}`,
    {
        name:name,
        email:email,
    }).then(()=>{
        navigate("/read")
    })
};

return (
         <>
<h2>Update</h2>
<form >
            <div className='flex flex-col'>
                <label>Name=</label>
                <input name='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <br></br>
            <div className='flex flex-col'>
                <label>Email=</label>
                <input name='email' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <br></br>
             <button type='update'  className='btn btn-primary mx-2' onClick={handleUpdate}>Update </button>
           <Link to="/read">
           <button type='update' className='btn btn-secondary mx-2' >Back </button>
           </Link>
        </form>
</>
  )
}
export default Update;