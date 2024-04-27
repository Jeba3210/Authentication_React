import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import Authentication from './Authentication.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Profile from './Components/Profile/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Authentication />}>
      <Route path='' element={<Signup />}/>
      <Route path='profile' element={<Profile />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
