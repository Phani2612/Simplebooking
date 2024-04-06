import React from 'react'
import '../App.css'
import Footer from './Footer';
import Axios from 'axios'

function Contact() {


        const [formData, setFormData] = React.useState({
          name: '',
          email: '',
          message: ''
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Here you can handle form submission, for now, let's just log the data
          console.log(formData);
          // You can also send the form data to a server using fetch or Axios
          // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
          // .then(response => response.json())
          // .then(data => console.log(data))
          
          Axios.post('http://localhost:5000/contact',formData).then(function(output)
          {
              
          }).catch(function(error)
          {

          })

          window.location.pathname = '/home'

        };
      
        return (
            
<div className='ContatctMAIN' >




<div className="contact-container">
              <h2>Contact Us</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>



<Footer/>


</div>




          );

        }

export default Contact