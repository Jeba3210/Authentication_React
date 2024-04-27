import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const navigate = useNavigate();
  const [userDetails , setUserDetails] = useState();

  useEffect(() => {
    if(!localStorage.getItem("details")){
        navigate("/")
    }
    setUserDetails(JSON.parse(localStorage.getItem("details")));
   
  },[])
  return (
    <div>{userDetails &&  
        <div>
          <h1>Profile</h1>
          <p>Name : {userDetails.name}</p>
          <p>Email : {userDetails.email}</p>
          <p>Password: {userDetails.password}</p>
          <p></p>
        <button onClick={() =>{localStorage.removeItem("details"); navigate("/")}}>LOg Out</button>
        </div>
      }       
    </div>

  )
}

export default Profile