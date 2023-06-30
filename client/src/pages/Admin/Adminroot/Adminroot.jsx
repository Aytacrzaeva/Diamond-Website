import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from "../../../layout/Admin/header/AdminHeader"
import AdminNavbar from '../../../layout/Admin/navbar'
import {useCookies} from 'react-cookie'
import axios from 'axios'

const Adminroot = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:8080/auth/register",
          {},
          {
            withCredentials: true,
          }
        );

        console.log(data);
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);

  return (
    <div>
        <AdminHeader/>
        <AdminNavbar/>
        <Outlet/>
    </div>
  )
}

export default Adminroot