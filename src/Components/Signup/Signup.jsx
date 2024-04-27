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

import React,{ useEffect, useRef, useState } from "react"
import "./form.css"
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function SignUp(){
    // const [name , setName] =useState("")
    // const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");
    // const [confirmPassword , setConfirmPassword] = useState("");

    const name1 = useRef();
    const email1 = useRef();
    const password1 = useRef();
    const cPassword1 = useRef();

    // const [validatedEmail,setValidatedEmail] = useState(false);
    // const [validatedPassword,setValidatedPassword] = useState(false);
    // const [validatedConfirmPassword,setvalidatedConfirmPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("details")){
            toast.error("User is already logged in !")
            navigate("/profile")
        }
       
       
      },[])

    // function handleEmail(e){
    //     const newEmail = e.target.value;
    //     setEmail(newEmail);
    //     setValidatedEmail(validateEmail(newEmail));
    // }

    // const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    //   };

    // function handlePassword(e){
    //     const newPassword = e.target.value;
    //     setPassword(newPassword);
    //     setValidatedPassword( newPassword.length >= 8);
    // }

    // function handleConfirmPassword(e){
    //     const newConfirmPassword = e.target.value;
    //     setConfirmPassword(newConfirmPassword);
    //     setvalidatedConfirmPassword(newConfirmPassword === password);
    // }
    
   

      function handleSubmit(event){
          event.preventDefault();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if(!name1.current.value && !email1.current.value && !password1.current.value && !cPassword1.current.value){
            toast.error("All fields are mandatory!");
            return;
        }
        if(password1.current.value.length < 8 || password1.current.value.length >20){
            console.log(password1.current.value.length)
            toast.error("Password must be between 8 and 20 characters");
            return;
        }
        if(cPassword1.current.value !== password1.current.value ){
            toast.error("Password and confirnm password should be same!")
            return;
        }
        if(!emailRegex.test(email1.current.value)){
            toast.error("Invalid Email!");
            return;
        }
        const details = {
            name : name1.current.value,
            email : email1.current.value,
            password : password1.current.value,
            confirmPassword : cPassword1.current.value,
            accessToken : uuid()
        } 
        console.log(details);
        localStorage.setItem("details" ,JSON.stringify(details));
        toast.success("User logged in successfully");
        navigate("/profile");
        // toast.error("Can't submit the form");
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
                // onChange={(e) => {setName(e.target.value)}}
                ref={name1}
            
            />

            <label htmlFor="email">Email</label>
            <input type="text"
                className='input'
                placeholder="  Enter your email"
                //  onChange={handleEmail}
                ref={email1}
                // value = {email}
               
            />
             

            <label htmlFor="Password">Password</label>
            <input type="Password"
                className='input'
                placeholder=" Enter Password" 
                // value = {password}
                // onChange={handlePassword}
                ref={password1}
                
            />
           

            <label htmlFor="Password"> Confirm Password</label>
            <input type="Password"
                className='input'
                placeholder="  Re-enter Password" 
                // value = {confirmPassword}
                // onChange={handleConfirmPassword}
                ref={cPassword1}
                
            />
           

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