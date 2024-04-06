import React from 'react'
import {BrowserRouter , Link , Routes , Route, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useContext } from 'react'
import { Mybox } from './App'

function Login() {

  const {data} = useContext(Mybox)




  const Navigate = useNavigate()

  const [check , setcheck] = React.useState()


  const [details , setdetails] = React.useState({


    email : "",
    password : "",
   
})


function Collectdetails(event)
{
       setdetails({...details , [event.target.name] : event.target.value})
}

function Senddata(event)
{
   
    event.preventDefault()
    
    Axios.post('http://localhost:5000/login',details).then(function(output)
    {
       

      console.log(output.data)

      if(output.data === '/register')
      {
         Navigate('/register')
      }

      if(output.data === '/login')
      {
           setcheck('Please check the password')
      }

      if(output.data === '/Home')
      {
         data(details.email)
         Navigate('/Home')
      }

      
  

    }).catch(function(error)
    {
        console.error(error)
    })


}
   




  return (
    




<div className='Intro'    >

<div id='Introheader'  >  
<h1 id='Introh1' style={{textDecoration:'none'}} >Contact : <a href="mailto:phanidimple258@gmail.com"  >phanidimple258@gmail.com</a> </h1>


</div>


<div class="custom-container">
  <h2 class="custom-heading">Login</h2>
  <form  method="post" class="custom-form" onSubmit={Senddata}  >
    <label for="custom-username" class="custom-label"><b>Email</b>:</label>
    <input type="text" id="custom-username" name="email" class="custom-input" required onChange={Collectdetails} />

    <label for="custom-password" class="custom-label"><b>Password</b>:</label>
    <input type="password" id="custom-password" name="password" class="custom-input" required  onChange={Collectdetails} />

    {check ? check : null}

    <input type="submit" value="Login" class="custom-button"/>

     <Link to='/register' id='signup'>New user ?Sign up</Link>
  </form>
</div>








</div>


  )
}

export default Login



