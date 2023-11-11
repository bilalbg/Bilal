import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import {
  Cardcontainer,
  Buttonpos,
  ulist
}from './cardelements'

const Cards = () => {


  return (
    <>
      <Cardcontainer>
        
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title  >Natural Language Processing</Card.Title>
            <Card.Text >
              <ulist>
                <li>Developed a Latent Semantic Analysis algorithm for processing a vast English Wikipedia text corpus of 490,000
                documents in <b>Jupyter notebook</b></li>
                <li>Engineered a sparse matrix representation encompassing the top 10,000 frequently occurring words across all
                490,000 documents, utilizing sklearn </li>
                <li>Employed t-SNE to create a 2D visualization of the 300 most common words in a dataset </li>
              </ulist>
            </Card.Text>
            <Buttonpos>
            <Button  variant="outline-primary" >
            <a href="https://github.com/bilalbg/Machine-Learning-EECS-4404-/tree/main/Project" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
              </Button >
            </Buttonpos>
          </Card.Body>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title >Webchat Application</Card.Title>
            <Card.Text style = {{padding:'12px 0px'}}>
              <ulist>
                <li>Developed a real-time chat application using <b> GO </b>  for the backend and <b>React JS </b> for the frontend   </li>
                <li>Managed server and user data efficiently through <b>MongoDB</b></li>       
                <li>Implemented WebSocket technology to enable instant communication among users</li> 
                <li>Enhanced performance and scalability by applying Redis’ Publish-Subscribe pattern for asynchronous messaging</li>
              </ulist>
            </Card.Text>
            < Buttonpos>
            <Button variant="outline-primary" style={{margin:'3px'}}>
            <a href="https://github.com/bilalbg/GoLang-Webchat" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
            </Button>
            </Buttonpos>
          </Card.Body>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title  > First Person Shooter Microgame </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              <ulist>
                <li>Created a First Person Shooter game using <b>Unity</b> and <b>C#</b> where the goal is to defeat all enemies in the zone with
                different weapons and tools in the player’s arsenal </li>
                <li>Curated a sound library of over 30 assets and creatively implemented them to create a more immersive and
                enjoyable player experience</li>
              </ulist>
            </Card.Text>
            < Buttonpos>
              <Button variant="outline-primary" >
              <a href="https://github.com/bilalbg/FPS-Microgame/tree/main" 
                target="_blank" rel="noreferrer"
              >
                Github repository
              </a>
              </Button>
            </Buttonpos>
          </Card.Body>
        </Card>
      </Cardcontainer>
     
    </>
  )
}

export default Cards
