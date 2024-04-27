import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/Signup/Signup'
import Profile from './Components/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header'

function App() {


  return (
    <>
     <Header />
     <Routes>
      <Route path='/'element={<SignUp/>}/>
      <Route path='/profile'element={<Profile/>}/>

    </Routes>
    <ToastContainer position='top-right'/>
    </>
   
  )
}

export default App
