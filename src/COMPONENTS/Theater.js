import React, { useLayoutEffect } from 'react'
import {BrowserRouter , Link , Routes , Route, Outlet, useParams} from 'react-router-dom'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Server_URL from './URL';


function Theater() {



  const [Name , setName] = React.useState([])

  const {id} = useParams()

  const {date} = useParams()

  // console.log(id)



React.useEffect(function()
{

  Axios.get(`${Server_URL}/theater`).then(function(output)
  {
    console.log(output.data)
    setName(output.data)
  }).catch(function(error)
  {
    console.error(error)
  })

},[])

function render(data)
{
      window.location.pathname = `${date}/theater/${id}/show/${data}`
}


function changeBackground(i)
{
     const link1 = document.querySelector('#date1')
     const link2 = document.querySelector('#date2')
     const link3 = document.querySelector('#date3')
     
     if(i == 1)
     {
         link1.style.backgroundColor = 'pink'

     }

     else if (i == 2)
     {
      link2.style.backgroundColor = 'pink'
      link1.style.backgroundColor = ""
      link3.style.backgroundColor = ""


     }

     else{

      link3.style.backgroundColor = 'pink'
      link2.style.backgroundColor = ''
      link1.style.backgroundColor = ""

     }
    
}

function logout(){

    localStorage.removeItem('Userdata')

    window.location.pathname = '/'

}



  return (
    <div>

      

<div className='Dates' >


<Link  style={{backgroundColor:'none'}}   onClick={function()
{
    changeBackground(1)
}}    to={`/1/theater/${id}`}   id='date1' >April 2nd</Link>

<Link   style={{backgroundColor:'none'}}   onClick={function()
{
    changeBackground(2)
}}    to={`/2/theater/${id}`}  id='date2' >April 3rd</Link>

<Link   style={{backgroundColor:'none'}}  onClick={function()
{
    changeBackground(3)
}}    id='date3'   to={`/3/theater/${id}`}   >April 4th</Link>

<Link  to='/home'  id='hometheater' style={{color:'white' , textDecoration:'none' , fontSize : "30px"}}>Home</Link>
<h1 id='logout' >Logout</h1><FontAwesomeIcon id='outicon'  style={{fontSize : '40px'}}  onClick={logout} icon={faRightFromBracket} />


</div>



<div className='Allcombine'  >
  
<div className='theaterscreen' >

 

  
</div>

<div className='Showselection' >



{

Name.map(function(i)
{
     
    if(i.id == id)
    {
        return <h1>{i.Name}</h1>

       
    }

    


})


}


<div className='Theaterbox'>






{




Name.map(function(i)
{
      if(i.id == id)
      {
        return i[`Date${date}`].map(function(j)
        {
          return <div     onClick={function()
            {
              render(j.id)
            }} id='showdetails'  ><Link  id='shownames'  to = {`show/${j.id}`} >{j.Name}</Link></div>
        })
      }
})






}





</div>

<Outlet></Outlet>




</div>

</div>





    </div>
  )
}

export default Theater