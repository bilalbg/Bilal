import React from 'react'
import Card from 'react-bootstrap/Card'
import './Cards.css'
import {amzn, hfla} from "../../Images"
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
           <Img src={hfla} width="30vw"/>
            <Card.Body>
              <Card.Title  >Hack for LA (Volunteer) </Card.Title>
              <Card.Text >
                <ulist>
                <li>Collaborated with a team of researchers, designers and developers to create a Web Traffic Demand Management tool for the LA Department of Transportation using React, Javascript and SQL </li> 
                </ulist>
              </Card.Text>
            </Card.Body>
        </Card>
        
        <Card className="bg-dark text-white">
           <Img src={amzn} width="30vw"/>
            <Card.Body>
              <Card.Title  >Amazon</Card.Title>
              <Card.Text >
                <ulist>
                <li>Developed Event Driven Architecture using <b>Java</b>,  <b>Typescript</b> and  <b>AWS Services</b>, 
                  processing thousands of daily global inventory events and ensuring precise inventory levels</li> 
                <li>Led initiative to automate correcting inaccurate data in inventory stores using AWS Lambda, S3, and DynamoDB,
                  resulting in the mitigation of business impacts and a 15% reduction in time spent on weekly manual tasks </li> 
                <li>Designed a second iteration of an inventory tracking system, utilizing AWS Step Functions workflow, enhancing operational accuracy by 40% </li> 
                <li>Mentored junior engineers through 1:1 biweekly meetings, giving suggestions on code structure, clarity, and design, leading to an overall increase in team productivity and agility</li> 
                <li>Automated cleaning up 100s of weekly log files with CronJobs, mitigating service certificate errors due to storage capacity during yearly code freezes</li>
                </ulist>
              </Card.Text>
            </Card.Body>
        </Card>
      </Cardcontainer>
     
    </>
  )
}

export default Cards
