import React from 'react'
import Axios from 'axios'
import {BrowserRouter , Link , Routes , Route , useNavigate} from 'react-router-dom'
 
function Register() {



const [Exist , setExist] = React.useState('')

const Navigate = useNavigate()

const [details , setdetails] = React.useState({

    username : "",
    email : "",
    password : "",
    confirmpassword:""
})


function Collectdetails(event)
{
       setdetails({...details , [event.target.name] : event.target.value})
}

function Senddata(event)
{
   
    event.preventDefault()
    
    Axios.post('http://localhost:5000/register',details).then(function(output)
    {
       

     if(output.data === 'Already exist')
     {

          setExist(output.data)
     }

     if(output.data === '/login')
     {
           Navigate('/')
     }


    }).catch(function(error)
    {
        console.error(error)
    })


}



  return (
    <div className='Intro'>
<div id='Introheader'  >  
<h1 id='Introh1' style={{textDecoration:'none'}} >Contact : <a href="mailto:phanidimple258@gmail.com"  >phanidimple258@gmail.com</a> </h1>


</div>



<div class="registration-container">
  <h2 class="registration-heading">Sign Up</h2>
  <form  method="post" class="registration-form" onSubmit={Senddata}  >
    <label for="reg-username" class="registration-label">Username:</label>
    <input type="text" id="reg-username" name="username" class="registration-input" required  onChange={Collectdetails}  />
   
    <label for="reg-email" class="registration-label">Email:</label>
    <input type="email" id="reg-email" name="email" class="registration-input" required  onChange={Collectdetails}/>

    <label for="reg-password" class="registration-label">Password:</label>
    <input type="password" id="reg-password" name="password" class="registration-input" required   onChange={Collectdetails}/>
  
    <label for="reg-password" class="registration-label">Confirm Password:</label>
    <input type="password" id="reg-password" name="confirmpassword" class="registration-input" required onChange={Collectdetails}  />

    <input type="submit" value="Register" class="registration-button"/>

    {Exist ? <Link to='/' >{Exist}</Link> : null}
  </form>
</div>






    </div>
  )
}

export default Register