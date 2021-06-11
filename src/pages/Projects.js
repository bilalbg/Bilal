import React from 'react'
import Cards from '../Components/Cards'
import Infosection from '../Components/infosec';
import {  homeObjTwo } from '../Components/infosec/Data';


const About = () => {
  
  return (
    <div >
      {/* <Infosection {...homeObjTwo}/> */}
     <Cards  {...homeObjTwo}/>
     </div>
  )
}
export default About
