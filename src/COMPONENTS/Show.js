import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import Axios from 'axios'
import { createContext } from 'react';
import Server_URL from './URL';

export const Mybox = createContext()


function Show() {

    
  
    const [Output , setOutput] = React.useState([])

    const [Data , SetData] = React.useState([])

    const [Seats , setseat] = React.useState([])

    const [SeatData , setSeatdata] = React.useState([])
   

    // const [Userdetails , setUserdetails] = React.useState([])

    
    const {id} = useParams()
    const {ID} = useParams()
    const {date} = useParams()

    // console.log("theater ID",id)
 

    const Userdetails = JSON.parse(localStorage.getItem('Userdata'))

    // console.log(GetUsername)
    
    React.useState(function()
    {
        Axios.get(`${Server_URL}/theater`).then(function(output)
        {
           
           SetData(output.data)
        }).catch(function(error)
        {
           console.error(error)
        })
    },[])
   

    React.useState(function()
    {
        Axios.get(`${Server_URL}/${date}/theater/${id}/show/${ID}`).then(function(output)
        {
            console.log(output.data)
           setSeatdata(output.data)
           
        }).catch(function(error)
        {
           console.error(error)
        })
    },[])


    




    // console.log(id)
    
    React.useEffect(function()
    {
        const icons = [];
        for(let i = 0 ; i < 10 ; i ++)
        {
            
            // console.log(icons)
         
            icons.push(<FontAwesomeIcon key={i} icon={faCouch} />);
            
           
        }

       setOutput(icons)   

    //    Certainly! In React, state updates using hooks like useState are shallow merged. This means that when you call the state setter function (e.g., setOutput), React will replace the entire state with the new value you provide. It doesn't perform a deep merge or update only specific parts of the state.
       
    //    In your case, if you directly use setOutput(<FontAwesomeIcon icon={faCouch} />), you would be replacing the state (output) with a single <FontAwesomeIcon> component. This means that on each iteration of the loop, the previous component would be replaced by the new one. As a result, you would end up with only the last icon rendered, because each iteration would override the previous one.
       
    //    By using an array to accumulate the icons and then updating the state with the array, you ensure that each icon is added to the existing state rather than replacing it entirely. This way, all icons are preserved and rendered in the final output.//

        

    },[])



function selection(index,j) {
    setOutput(Output.map((i, idx) => {
        if (idx === index && i.props.Data !== 'red') {
            // Toggle the color to red if the index matches and it's not already red
           
                
            setseat([...Seats , j])
            
            return <FontAwesomeIcon key={idx} icon={faCouch} style={{ color: 'red' }} Data="red" />;
            
        } else if (idx === index && i.props.Data === 'red') {
            // Toggle back to default color if the index matches and it's already red
            
            setseat(Seats.filter(function(i)
            {
                if(i.id != j.id)
                {
                    return i
                }
            }))
      
            return <FontAwesomeIcon key={idx} icon={faCouch} />;
        } else if (i.props.Data === 'red') {
            // Keep the color red for previously selected icons
            return <FontAwesomeIcon key={idx} icon={faCouch} style={{ color: 'red' }} Data="red" />;
        } else {
            // Keep the color unchanged for other icons
            return <FontAwesomeIcon key={idx} icon={faCouch} />;
        }
    }));


}









function BookingDetails()
{
    //   console.log(Seats)
    //   console.log("Theater ID",id)
    //   console.log("Showinfo",ID)

      Axios.post(`${Server_URL}/booking`, {Seats , id , ID , Userdetails} ).then(function(output)
      {
         
      }).catch(function(error)
      {
        console.error(error)
      })
}







  return (
    
    <div>



   <div className='Hall'>




{
    Output.map(function(i,index)
    {
        
        return SeatData.map(function(item,idx)
        {
              return item.SeatID.map(function(j,indexx)
              {
                if(index === indexx && j.booked === false )
              {
                return <h1  onClick={function()
                    {
                       selection(index , j)
                    //    collectSeat(j)
                   
                    }}  >{i}{j.id}</h1>
       
              }

              if (index === indexx && j.booked === true) {


                   return <h1 style={{color : 'wheat'}}  >{i}{j.id}</h1>
              }
              })
        })

      

        
    })
}




</div>

<div className='paymentbox' >

<Link to={`/${date}/${ID}/payment`} >

<button  onClick={function()
{
    BookingDetails()
}}   type="button" class="btn btn-primary">Book</button>

</Link>

</div>



    </div>
  
  )
}

export default Show