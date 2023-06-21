import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../../layout/Admin/header/index'
const Adminroot = () => {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
    </div>
  )
}

export default Adminroot