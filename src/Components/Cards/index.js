import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import {
  Cardcontainer,
  Buttonpos
}from './cardelements'

const Cards = () => {


  return (
    <>
      <Cardcontainer>
        
      <Card className="bg-dark text-white" style={{ height:"100%", maxheight:"400px" }} >
          <Card.Body>
            <Card.Title  >Natural Language Processing</Card.Title>
            <Card.Text >
              <ul>
                <li>Used Latent Semantic Analysis to derive word represenations for an English Wiki dump text corpus</li>
                <li>Investigated Semantic Similarity between words by created a SGD matrix factorization algorithm</li>
                <li>Developed with <b>Python</b> on <b> Jupyter notebook</b> </li>
              </ul>
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
      <Card className="bg-dark text-white" style={{ height:"100%", maxheight:"400px" }}>
          <Card.Body>
            <Card.Title >Webchat Application</Card.Title>
            <Card.Text style = {{padding:'12px 0px'}}>
              <ul>
                <li>Webchat created using <b> GO </b> and <b>React JS </b> </li>
                <li>Deployed on Heroku using Docker</li>
                <li>Uses websockets to allow for instant communication between clients</li>
                <li>Speak with large groups of people in public rooms or
                   with a single person in private messages</li>             
              </ul>
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
      <Card className="bg-dark text-white" style={{height:"100%", maxheight:"400px"  }}>
          <Card.Body>
            <Card.Title  > Tetris </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              <ul>
                <li>Tetris game made using <b>Python</b> and the <b>pygame</b> library </li>
                <li>Developed scoring function to compete with ones self or others.</li>
                <li>Developed option to choose multiple difficulties and a scaling 
                  difficulty to allow for the game to be more challengingand less monotone.</li>
              </ul>
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
