import './App.css';

import {BrowserRouter , Link , Routes , Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Home from './COMPONENTS/Home';
import { createContext , useState , useEffect } from 'react';
import Theater from './COMPONENTS/Theater';
import Show from './COMPONENTS/Show';
import Notfound from './COMPONENTS/Notfound';
import Payment from './COMPONENTS/Payment';
import Order from './COMPONENTS/Order';
import Navbar from './COMPONENTS/Navbar';
import Confirm from './COMPONENTS/Confirm';
import Description from './COMPONENTS/Description';
import Contact from './COMPONENTS/Contact';
import About from './COMPONENTS/About';


export const Mybox = createContext()

function App() {

  const [Userdata,setuserdata] = useState(function()
  {

    let Storedata = localStorage.getItem('Userdata')

    return Storedata? JSON.parse(Storedata) : null



  })

  useEffect(function()
  {

    localStorage.setItem('Userdata', JSON.stringify(Userdata))

  },[Userdata])


  return (
    
      
      <div  >
        
      <Mybox.Provider  value={{data : setuserdata}} >



     
      <BrowserRouter>

      <Routes>
        
<Route path='' element={<Login/>} ></Route>
<Route path='/register' element = {<Register/>} ></Route>

      </Routes>
      
      
{Userdata ? 

<Routes>

<Route path='' element={<Login/>} ></Route>
<Route path='/register' element = {<Register/>} ></Route>
<Route path='/Home' element={<Home data = {Userdata}  />} ></Route> 
<Route path='/:date/theater/:id' element = {<Theater/>} >

<Route path='show/:ID' element={<Show/>} ></Route>


</Route>

<Route path='*' element={<Notfound/>}></Route>

<Route path='/:date/:show/payment' element={<Payment/>} ></Route>

<Route path='/Order' element={<Order/>} ></Route>

<Route path='/Home' element = {<Navbar/>}  ></Route>

<Route path='/Confirmed' element = {<Confirm/>}  ></Route>

<Route path='/read/:Name' element={<Description/>} ></Route>

<Route path='/contact' element={<Contact/>} ></Route>

<Route path='/about' element = {<About/>}  ></Route>

</Routes>

:null}
 

      
    
      </BrowserRouter>
   


      </Mybox.Provider>
     
      </div>
       

  );
}

export default App;
