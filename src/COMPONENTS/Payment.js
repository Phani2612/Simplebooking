import React from 'react'
import Axios from 'axios'
import { useContext } from 'react'
import { Mybox } from './Show'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket,faTicket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Server_URL from './URL'

function Payment() {

 



const [Outputs , SetOutputs] = React.useState([])
const [Price , setPrice] = React.useState(0)
const [Movie , setMovie] = React.useState('')
const [TheaterID , setTheaterID] = React.useState(0)

const {date} = useParams()

const {show} = useParams()

const GetUsername = JSON.parse(localStorage.getItem('Userdata'))

React.useEffect(function()
{

  Axios.get(`${Server_URL}/booking`).then(function(output)
  {
    
    // console.log(output.data)
    SetOutputs(output.data)

  }).catch(function(error)
  {
    console.error(error)
  })

},[])




 React.useEffect(function()
 {
  Outputs.map(function(i)
  {
       setPrice(i.Total)
       
  })

 },[])



 React.useEffect(function()
 {
  Outputs.map(function(i)
  {
       
     return i.TheaterID.map(function(j)
     {
          setTheaterID(j.id)
     })
       
  })
 
 },[Outputs])




  // console.log(ShowID)
 


  // console.log("Usestate",CheckUser , "Localstorage",GetUsername)



  function ConfirmBooking(Pricevalue)
  {

    Axios.post(`${Server_URL}/Confirm`, {Name : GetUsername , Theater : TheaterID , Date : date , Show : show }  ).then(function(output)
    {
      console.log(output)
    }).catch(function(error)
    {
      console.error(error)
    })

  }
  


  function Gateway()
  {
       window.location.href = `${Server_URL}/debit`
  }


// console.log("Usestate value", CheckUser)
// // console.log(GetUsername === CheckUser)


// console.log("Local storage",GetUsername)





  return (
    <div  className='payment' >



  
<div className='Header'>

<h3>{Movie}</h3>

{




Outputs.map(function(i)
{
    if(i.UserID === GetUsername)
    {
      return i.TheaterID.map(function(j)
    {
        return <h3>{j.Name}</h3>
    })
    }

    
})

}

{


Outputs.map(function(i)
{
    if(i.UserID === GetUsername)
    {
      return i.ShowID.map(function(j)
    {
       
        return <h3>{j.Name} Show</h3>
    })
    }

    
})



}





<Link  to='/' style={{textDecoration:'none'}}   ><h1 id='logout' >Logout</h1><FontAwesomeIcon  style={{fontSize : '40px', paddingLeft:'-100px'}}   icon={faRightFromBracket} /></Link>



</div>



<div className='Confirmpay'  >

{

Outputs.map(function(i)
{
     if(i.UserID === GetUsername)
     {
        return <div>

            {console.log("Seatlength",i.SeatID.length)}

        <div className='SeatDetails' >
        
        <h4>Seat Details</h4>
        
        <h4>{i.SeatID.length}</h4>
        
        </div>
        
        
        <div className='Final' >
        
        <h4>Total value</h4>
        
        
        <h4>{i.Total}</h4>
        
        
          
        </div>
        
        
        <div id= 'PayNow' >
        
        <button   onClick={function()
        {
          ConfirmBooking(i.Total)

          Gateway()


        }}  type="button" class="btn btn-success">Proceed to Pay {i.Total}.INR</button>
        
        </div>
        
        
          </div>
        
             
     }
})


}


</div>
  



    </div>
  )
}

export default Payment