import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from "../../../layout/Admin/header/AdminHeader"
import AdminNavbar from '../../../layout/Admin/navbar'
import {useCookies} from 'react-cookie'
import axios from 'axios'

const Adminroot = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const [data, setdata] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8080/auth/getMe', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => setdata(res.data))
      .catch(() => {
        if (!data.isAdmin) {
          console.log('login');
          navigate('/login')
        }
      })
      
  }, [data.isAdmin])

  

  return (
    <div>
        {
          (token&&data.isAdmin)&&
          <>
          <AdminHeader/>
          <AdminNavbar/>
          <Outlet/>
          </>
        }
    </div>
  )
}

export default Adminroot