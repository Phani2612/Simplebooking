import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm , faTicket } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footercontainer' >


    

<div id='sidebyside' >


<div  id='aboutandcontact'>

 <Link to='/about' >  <h6>About us</h6></Link>

 <Link to='/contact' > <h6>Contact</h6></Link>

</div>










<div id='followdata'  >
<h6 id='follow' >Follow us on</h6>  
<div id='logos' >



<a href='https://facebook.com/'  target='__blank'  ><FaFacebook /></a>
 <a  href='https://twitter.com/' target='__blank'   ><FaTwitter /></a>
      <a href='https://www.instagram.com/' target='__blank'   ><FaInstagram /></a>



</div>






</div>




</div>




    </div>
  )
}

export default Footer