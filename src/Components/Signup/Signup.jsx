// import React from 'react'

// function Signup() {
//     return (
//         <div>
//             <form action="#">
//                 <h1>Sign Up</h1>
//                 <label htmlFor="name">Name</label>
//                 <input type="text"
//                     id='name'
//                     placeholder=' Enter Your Name'
//                 />
//                 <label htmlFor="email">Email</label>
//                 <input type="email"
//                     id='email'
//                     placeholder='Enter Your Email Id'
//                 />
//                 <label htmlFor="password">Password</label>
//                 <input type="password"
//                     id='password'
//                     placeholder='Enter Your Password'
//                 />
//                 <label htmlFor="c-password">Confirm password</label>
//                 <input type="password"
//                     id='c-password'
//                     placeholder='Re-enter Yopur Password'
//                 />
//                 <button type='submit'>Sign Up</button>
//             </form>
//         </div>
//     )
// }

// export default Signup

import React,{ useEffect, useState } from "react"
import "./form.css"
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";



function SignUp(){
    const [name , setName] =useState("")
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    const [validatedEmail,setValidatedEmail] = useState(false);
    const [validatedPassword,setValidatedPassword] = useState(false);
    const [validatedConfirmPassword,setvalidatedConfirmPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("details")){
            navigate("/profile")
        }
       
       
      },[])

    function handleEmail(e){
        const newEmail = e.target.value;
        setEmail(newEmail);
        setValidatedEmail(validateEmail(newEmail));
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    function handlePassword(e){
        const newPassword = e.target.value;
        setPassword(newPassword);
        setValidatedPassword( newPassword.length >= 8);
    }

    function handleConfirmPassword(e){
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setvalidatedConfirmPassword(newConfirmPassword === password);
    }
    
   

      function handleSubmit(event){
         event.preventDefault();
         if(validatedEmail && validatedPassword && validatedConfirmPassword){
            const details = {
                name,
                email,
                password,
                confirmPassword,
                accessToken : uuid()
            } 
            console.log(details);
            localStorage.setItem("details" ,JSON.stringify(details));
            navigate("/profile");
         }else{
            alert("can’t submit the form");
         }
      }


    

    return(
      <div className='main'>
        <div className="form" onSubmit={handleSubmit}>
          <form className="form">

          <label htmlFor="name">Name</label>
            <input type="text"
                className='input'
                id="name"
                placeholder="  Enter your name"
                onChange={(e) => {setName(e.target.value)}}
                required
            />

            <label htmlFor="email">Email</label>
            <input type="email"
                className='input'
                placeholder="  Enter your email"
                 onChange={handleEmail}
                // value = {email}
                required
            />
             

            <label htmlFor="Password">Password</label>
            <input type="Password"
                className='input'
                placeholder=" Enter Password" 
                // value = {password}
                onChange={handlePassword}
                required
            />
           

            <label htmlFor="Password"> Confirm Password</label>
            <input type="Password"
                className='input'
                placeholder="  Re-enter Password" 
                // value = {confirmPassword}
                onChange={handleConfirmPassword}
                required
            />
           {!validatedConfirmPassword && !validatedPassword && !validatedEmail && name &&<span className="validate"  style={{ color: 'red' }}>Error : All the fields are mandatory</span>}

            <div className='divBtn'>
                <button
                 className='btn' 
                 type='submit'>
                    Sign Up
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }



  export default SignUp;