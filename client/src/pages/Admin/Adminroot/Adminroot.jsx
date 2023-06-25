import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from "../../../layout/Admin/header/AdminHeader"
import AdminNavbar from '../../../layout/Admin/navbar'

const Adminroot = () => {
  return (
    <div>
        <AdminHeader/>
        <AdminNavbar/>
        <Outlet/>
    </div>
  )
}

export default Adminroot