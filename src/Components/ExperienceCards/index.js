import React from 'react'
import Card from 'react-bootstrap/Card'
import './Cards.css'
import {amzn} from "../../Images"
import {
  Cardcontainer,
  ulist
}from './cardelements'

const Cards = () => {


  return (
    <>
      <Cardcontainer>
        
        <Card className="bg-dark text-white">
           <Card.Img variant="top" src={amzn}/>
          <Card.Body>
            <Card.Title  >Amazon</Card.Title>
            <Card.Text >
              <ulist>
              <li> Worked on services responsible for directing inventory across the world using 
              <b>Java</b>,  <b>Typescript</b> and  <b>AWS Services</b></li> 
              <li>• Designed and led implementation for a state machine workflow to ensure a response was received following requests 
              for allocating <b>thousands</b> of items </li> 
              <li>Planned and oversaw implementation for operational tools to allow our team to <b>save 20% of time spent on-call</b> 
              and <b>prevent major business impacts</b> by automating a process to analyze and correct discrepancies between 
              data stores for <b>millions</b> of items</li> 
              <li><b>Deep dived</b> and corrected failure points and <b>maintained operational excellence</b> in our services during on-call</li> 
              <li>Cooperated with external teams to integrate new business types</li>
              </ulist>
            </Card.Text>
          </Card.Body>
        </Card>
      </Cardcontainer>
     
    </>
  )
}

export default Cards
