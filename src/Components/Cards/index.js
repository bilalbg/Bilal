import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import {
  Cardcontainer,
  Buttonpos,
  ulistist
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
                <li>Created a Latent Semantic Analysis algorithm for an English Wikipedia Dump text corpus of 490,000 documents in jupyter</li>
                <li>Used the <b> scikit-learn </b> library to create a sparse matrix representation of the top 10,000 most frequent words in a vocabulistary from all the documents</li>
                <li>Visualized the top 300 most frequent words among 490,000 
                  documents on a 2D graph using t-SNE from the <b> scikit-learn </b> library</li>
              </ulist>
            </Card.Text>
            <Buttonpos>
            <Button  variant="outline-primary" >
            <a href="https://github.com/jasminebg/Machine-Learning-EECS-4404-/tree/main/Project" 
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
                <li>Created a real time chat using <b> GO </b>  for the backend and <b>React JS </b> for the frontend   </li>
                <li>Deployed on Heroku using Docker</li>
                <li>Uses websockets to allow for instant communication between clients</li>
                <li>Speak with large groups of people in public rooms or
                   with a single person in private messages</li>             
              </ulist>
            </Card.Text>
            < Buttonpos>
            <Button variant="outline-primary" style={{margin:'3px'}}>
            <a href="https://github.com/Jasminebg/GoLang-Webchat" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
            </Button>
            <Button variant="outline-secondary" style={{margin:'3px'}} >
              <a href="https://jsgochat.herokuapp.com/"
              target="_blank" rel="noreferrer"
            >
              Webchat
            </a>
            </Button>
            </Buttonpos>
          </Card.Body>
        </Card>
      <Card className="bg-dark text-white">
          <Card.Body>
            <Card.Title  > Tetris </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              <ulist>
                <li>Tetris game made using <b>Python</b> and the <b>pygame</b> library </li>
                <li>Developed scoring function to compete with ones self or others.</li>
                <li>Developed option to choose mulisttiple difficulistties and a scaling 
                  difficulistty to allow for the game to be more challengingand less monotone.</li>
              </ulist>
            </Card.Text>
            < Buttonpos>
              <Button variant="outline-primary" >
              <a href="https://github.com/jasminebg/Gamedev/tree/master/pygame" 
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
