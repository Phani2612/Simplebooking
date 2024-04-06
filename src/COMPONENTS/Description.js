import React from 'react'
import Axios from 'axios'
import { useParams , Link } from 'react-router-dom'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import Server_URL from './URL'

function Description() {

const {Name} = useParams()

const [Data , SetData] = React.useState([])

const [fetchedVideoID , setFetchedVideoID] = React.useState("")

React.useEffect(function()
{

    Axios.get(`${Server_URL}/all`).then(function(output)
    {

        console.log(output.data)

        SetData(output.data)
    }).catch(function(error)
    {
        console.error(error)
    })

},[])

React.useEffect(function()
{
    movieTrailer(Name).then(function(output)
    {
         console.log(output)
         const myVideoID = new URLSearchParams(new URL(output).search).get("v")
         setFetchedVideoID(myVideoID)
    }).catch(function(error)
    {
        console.error(error)
    })

    
},[])

const Additionaldata = {

    height : '400px',

    width : '700px',

    playerVars : {

        autoplay : 1,

        
    }
}


  return (
    <div className='DescriptionMain'  >

       <div  id='HeaderPart'>
        
        <Link id='linkhover' style={{color:'white',textDecoration:'none'}} to='/home'   ><h1>Home</h1></Link>


        <Link id='linkhover' style={{color:'white',textDecoration:'none'}} to='/' ><h1>Logout</h1></Link>
        
        </div> 


<div className='DESC2ndmain'  >



{


Data.map(function(i)
{
    if(Name === i.movie_name)
    {
        return <div className='descriptionbox' >
 

<div id='imageandtext' >

<img  id='imagedesc'  src={i.image_url}   />

<div id='textInfo'  >



<h1 id='movieandcensor' >{i.movie_name}  ({i.censor})</h1>

<h3 id='movieandcensor'    style={{color:'white'}}  >Genre : {i.genre}</h3>

<h3  id='movieandcensor'    >Directed by : {i.director}</h3>


<div id='castdetails' >
<h3 id='casth3' >Cast:</h3>

{i.cast.map(function(j)
{
    return <h4 id='casth4' >{j}</h4>
})}
</div>

<div id='plot' style={{color:'white'}} >
<h3 id='ploth3' >Plot: </h3>
<h5 id='plotpara'  >{i.description}</h5>
</div>


</div>



<br/><br/><br/>


</div>



    </div>
    }
})




    
}




<div id='trailer' >
<Youtube   id='videoset' videoId={fetchedVideoID} opts={Additionaldata} /> 
</div>

</div>








    </div>
  )
}

export default Description