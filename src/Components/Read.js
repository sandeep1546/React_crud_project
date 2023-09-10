import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



const Read = () => {

    const[data,setData]=useState([]);
    
    const[tabledark,setTableDark]=useState('')

    function getData(){
        axios.get("https://648867b90e2469c038fda74a.mockapi.io/crud-project")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        

        });
    }
   function handleDelete(id){
    axios.delete(`https://648867b90e2469c038fda74a.mockapi.io/crud-project/${id}`)
    .then(()=>{
        getData();

    })
   };

   const setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    
    };

   useEffect(()=>{
      getData();

   },[]);
    
  
return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onClick={()=>{ 
    if (tabledark=== "table-dark") setTableDark("");
    else setTableDark("table-dark");
    }}/>
  </div>

    <h2> Read Data </h2>
    <Link to="/">
    <button className='btn btn-info'> CreateData</button>
    </Link>

 <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData)=>{
        return(
            <>
            <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
     <Link to="/update">
     <td><button className='btn-success' onClick={()=>setToLocalStorage(eachData.id,
     eachData.name,eachData.email)}>Edit</button></td>
     </Link>
      <td><button className="btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
    </tr>
    </tbody>
 
            </>
        )

    })
  
  }
</table>
    </>
  )
}
export default Read;