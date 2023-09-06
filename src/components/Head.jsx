import React from "react";
import OLX from '../images/OLX.png'
import car from '../images/car.png'
import house from '../images/House.png'
import  Component  from "../components/components";

function Head(){
    return(
        <> 
        <div className="Header">
        
        <nav className='Navbar'>
    <div><ul className='ul'>
    <li className="list"><img id="logo1" src={OLX} alt="" /></li>
    <li className='lists'><img src={car} alt="" /> Motors</li>
    <li className='lists'><img src={house} alt="" /> Properties</li>
     </ul></div>
     <div className="inputFilds">
    <li className="list"><img id="logo2" src={OLX} alt="" /></li>
    <input id="input1" placeholder="Pakistan" />
    <input id="input2" placeholder="Find Cars,Mobile Phone and more.." />
    <button className="Btn1">Login</button>
    <button className="Btn2">Sell</button>

     </div>
     </nav>
     </div>
        </>
    ) 
    
}
export default Head;