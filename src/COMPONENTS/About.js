import React from 'react';
import '../App.css'; // Import your CSS file with styles
import { Link } from 'react-router-dom';

function About() {
  return (
   

<div  className='AboutMain' >





<div className="about-container">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <p>
          Hello! My name is K. Phani Naidu, and I am a passionate and dedicated software engineer with a strong interest in the MERN stack (MongoDB, Express.js, React.js, Node.js).
        </p>
        <p>
          I am a fresher, eager to learn and grow in the field of web development. My journey into programming started with a curiosity about how websites and web applications work, and since then, I have been exploring various technologies and frameworks to enhance my skills.
        </p>
        <h3>My Skills:</h3>
        <ul>
         <div className='listitems' >
         <li>Proficient in HTML, CSS, and JavaScript</li>
          <li>Experience with React.js for building dynamic and responsive user interfaces</li>
          <li>Familiar with Node.js and Express.js for server-side development</li>
          <li>Knowledgeable in MongoDB for database management</li>
          <li>Comfortable working with Git and version control</li>
         </div>
        </ul>
        <p>
          I am enthusiastic about collaborating with teams to create innovative solutions and deliver high-quality products. My goal is to contribute positively to the tech industry while continuously expanding my knowledge and expertise.
        </p>
      </div>

      <Link to='/home' ><button  id='abouthome'  type="button" class="btn btn-light">Please go back to Home</button></Link>
    </div>




    




</div>



  );
}

export default About;
