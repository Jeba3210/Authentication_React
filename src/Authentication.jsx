import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Authentication() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Authentication