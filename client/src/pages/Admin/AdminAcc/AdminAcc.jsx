import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "./AdminAcc.scss"
const AdminAcc = () => {
    const logout = () => {
        localStorage.removeItem('token');
        console.log('logout');
        navigate('/')
      };
  return (
    <div className="adminacc">
        <div className="adminacc__hover">

        <h1>Admin Profile</h1>
        <p>A site administrator is a site manager who delegates some administrative tasks. As a site administrator, you are responsible for how a construction project runs daily. You are also responsible for completing every contract's required administrative tasks. You plan, direct and budget for construction projects.</p>
        <span>Admin@gmail.com</span><br />
        <span>Aytac Rzayeva</span><br />
        <Link onClick={logout}><BiLogOut /> Logout</Link>
        </div>

    </div>
  )
}

export default AdminAcc