import React from 'react'
import Axios from 'axios'
import '../App.css'
import {BrowserRouter , Link , Routes , Route, useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Server_URL from './URL'

function Home(props) {


const [Output , setoutput] = React.useState([])

const [location , setlocation] = React.useState('')

console.log(props.data)

function Booktheshow(i)
{
    Axios.post(`${Server_URL}/book`, {...i,user : props.data}).then(function(output)
    {
        console.log(output)
    }).catch(function(error)
    {
        console.error(error)
    })
}

React.useEffect(function()
{
 
    Axios.get(`${Server_URL}/all`).then(function(output){
      console.log(output.data)
setoutput(output.data)

    }).catch(function(error)
    {
        console.error(error)
    })

},[])





function LocationUpdate(event)
{
  
  
 
 event.preventDefault()

const SelectedLocation = event.target.value

setlocation(SelectedLocation)
 
//  console.log(event.target.value)

// console.log(SelectedLocation)


Axios.get(`${Server_URL}/data`).then(function(output){
  // console.log(output.data)
setoutput(output.data)

}).catch(function(error)
{
    console.error(error)
})




    Axios.post(`${Server_URL}/location`, {Location :SelectedLocation , user : props.data}).then(function(output){
   
    
        }).catch(function(error)
        {
            console.error(error)
        })

 
}


  return (
    <div className='HomeBody'  >

      <Navbar/>


<div className='movies' >



{


      Output.map(function(i)
      {
            return <div>



<div class="card"   >
            <img class="card-img-top" src={i.image_url} height="300px" width="200px" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{i.movie_name}    ({i.censor}) </h5>
              <h6>{i.genre}</h6>
              <p  class="card-text">{i.description.substring(0,100)}</p>
             
         
            {i.location === "Palwancha" ?  <Link to={`/1/theater/${i.id}`} onClick={function()

           
              {

                
                Booktheshow(i)
              }}    class="btn btn-primary"> Book</Link> :<Link to={`/read/${i.movie_name}`}> <button type="button" class="btn btn-primary">View details</button></Link>}

            </div>
          </div>






            </div>

            
      })
}





    </div>

<div id='location'>
<select value={location} onChange={LocationUpdate}>

<option value="Kothagudem">Choose Location</option>

  <option   value="Palwancha" >Palwancha</option>

</select>
</div>

<Footer/>
    </div>
  )
}

export default Home