
import React from 'react';
import Axios from 'axios';
import '../App.css'; // Importing CSS file
import { Link } from 'react-router-dom';
import Server_URL from './URL';

function Order() {
  const [output, setOutput] = React.useState([]);
  const userdetails = JSON.parse(localStorage.getItem('Userdata'));

  React.useEffect(() => {
    Axios.get(`${Server_URL}/Confirmed`)
      .then(output => {
        console.log(output.data);
        setOutput(output.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


 function DeleteNow()
 {
    Axios.delete(`${Server_URL}/${userdetails}`).then(function()
    {
        console.log("Deleted successfully")
    }).catch(function(error)
    {
        console.error(error)
    })
 }







  return (
   

<div id='Ordercontainer'>

<button id='yourbook' type="button" class="btn btn-light"><h1>Ticket Confirmed</h1></button>

<div id='Main' >

  
<div className='ticket-container'>
      <div className='ticket'>
        {output.map(order => {
          if (order.UserID === userdetails) {
            return (
              <div key={order.OrderID} className='ticket-content'>
                <div className='ticket-header'>
                  <h2>Your Movie Ticket</h2>
                </div>
                <div className='ticket-body'>
                  <div className='movie-info'>
                    {order.MovieID.map(movie => (
                      <div key={movie.movie_id} className='movie-item'>
                        <h3>{movie.movie_name}</h3>
                        <img src={movie.image_url} alt={movie.movie_name} />
                      </div>
                    ))}
                  </div>
                  <div className='details'>
                    <div className='theater-info'>
                      {order.TheaterID.map(theater => (
                        <div key={theater.theater_id} className='theater-item'>
                          <h4>Theater: {theater.Name}</h4>
                        </div>
                      ))}
                    </div>
                    <div className='show-info'>
                      {order.ShowID.map(show => (
                        <div key={show.show_id} className='show-item'>
                          <h4>Show Time: {show.Name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='seat-count'>
                    <h2>Total Seats: {order.SeatID.length}</h2>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      
    </div>

</div>



   <Link to='/home'  onClick={function()
   {
      DeleteNow()
   }}   > <button id='OrderHome' type="button" class="btn btn-light">Please go back to Home page</button></Link>


</div>



  );
}

export default Order;

