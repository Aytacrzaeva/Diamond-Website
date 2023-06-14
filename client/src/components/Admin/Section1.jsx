import React from 'react'
import "./Section1.css"
import { AiOutlineSearch } from 'react-icons/ai';
const Section1 = () => {
  return (
    <header>
  <nav>
    <div class="nav-left">
      <form class="search-form">
        <input type="text" placeholder="Ara"></input>
        <button type="submit"><AiOutlineSearch/></button>
      </form>
    </div>
    <div class="nav-right">
      <div class="user-profile">
        <span>Rzayeva Aytac</span>
        <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png" alt="User Profile Image"></img>
      </div>
    </div>
  </nav>
</header>

  
  )
}

export default Section1