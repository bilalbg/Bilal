import React from 'react'
import Card from 'react-bootstrap/Card'
import './Cards.css'
import {amzn} from "../../Images"
import {
  Cardcontainer,
  ulist,
  Img
}from './cardelements'

const Cards = () => {


  return (
    <>
      <Cardcontainer>
        
        <Card className="bg-dark text-white">
           <Img src={amzn} width="30vw"/>
            <Card.Body>
              <Card.Title  >Amazon</Card.Title>
              <Card.Text >
                <ulist>
                <li>Developed Event Driven Architecture using <b>Java</b>,  <b>Typescript</b> and  <b>AWS Services</b>
                ,for controlling global inventory events and ensuring accurate inventory levels</li> 
                <li>Spearheaded the replacement of an obsolete inventory tracking system with a state machine workflow, enhancing
                operational accuracy by <b>40% </b> </li> 
                <li>Planned and executed automation tools, resulting in a <b>20%</b> reduction in on-call hours and the proactive mitigation
                of business impacts due to discrepancies in data stores for millions of items</li> 
                <li>Mentored junior engineers through guidance, facilitating their skill development and team success</li> 
                <li>Identified and addressed failure points to maintain operational excellence during on-call responsibilities</li>
                </ulist>
              </Card.Text>
            </Card.Body>
        </Card>
      </Cardcontainer>
     
    </>
  )
}

export default Cards
