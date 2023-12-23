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
            <Card.Title  > Quotetaking: A quote taking app for iOS </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              <ulist>
                <li>Created an iOS app to conveniently save quotes from thousands of books using <b>Swift</b> and <b>SwiftUI</b></li>
                <li>Employed the <b>Core Data</b> framework to store, manage and organize user data</li>
                <li>Utilized the Vision framework to allow users to quickly and easily extract quotes from images</li>
                <li>• Enable features that allow users to share quotes directly to social media</li>
              </ulist>
            </Card.Text>
            < Buttonpos>
              <Button variant="outline-primary" >
              <a href="https://github.com/bilalbg/Quotetaking" 
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
      </Cardcontainer>
     
    </>
  )
}

export default Cards
