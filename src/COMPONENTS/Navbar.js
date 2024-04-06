import React from 'react'
import {BrowserRouter , Link , Routes , Route, useNavigate} from 'react-router-dom'

function Navbar() {

  function logout()
  {
    

      localStorage.removeItem('Userdata')
  
      window.location.pathname = '/'
  
  
  
  }
  return (
    <div>




<nav className="navbar">
  <ul>
    <li>
      

     <Link  to="/home"><b>Home</b></Link>
     
      
    </li>
    <li>
    <Link to="/order"><b>My Tickets</b></Link>
    </li>
   
    <li>
      <Link  onClick={logout} to="/"><b>Logout</b></Link>
    </li>
  </ul>
</nav>











    </div>
  )
}

export default Navbar