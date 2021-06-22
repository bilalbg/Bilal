import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import {
  Cardcontainer,
  buttonpos
}from './cardelements'

const Cards = ({ pageVisible}) => {


  return (
    <>
      <Cardcontainer pageVisible={pageVisible}>
        
      <Card style={{ height:"100%", maxheight:"400px" }} >
          <Card.Body>
            <Card.Title  >Natural Language Processing</Card.Title>
            <Card.Text >
              <ul>
                <li>Used Latent Semantic Analysis to derive word represenations for an English Wiki dump text corpus</li>
                <li>Investigated Semantic Similarity between words by created a SGD matrix factorization algorithm</li>
                <li>Developed with <b>Python</b> on <b> Jupyter notebook</b> </li>
              </ul>
            </Card.Text>
            <buttonpos>
            <Button  variant="outline-primary" >
            <a href="https://github.com/jasminebg/Machine-Learning-EECS-4404-/tree/main/Project" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
              </Button >
            </buttonpos>
          </Card.Body>
        </Card>
      <Card style={{ height:"100%", maxheight:"400px" }}>
          <Card.Body>
            <Card.Title >Webchat Application</Card.Title>
            <Card.Text style = {{padding:'12px 0px'}}>
              <ul>
                <li>Webchat created using <b> GO </b> and <b>React JS </b> </li>
                <li>Uses websockets to allow for instant communication</li>
                <li>Speak with large groups of people in public rooms or with a single person in private messages</li>
              </ul>
            </Card.Text>
            < buttonpos>
            <Button variant="outline-primary">
            <a href="https://github.com/Jasminebg/GoLang-Webchat" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
            </Button>
            </buttonpos>
          </Card.Body>
        </Card>
      <Card style={{height:"100%", maxheight:"400px"  }}>
          <Card.Body>
            <Card.Title  > Tetris </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              <ul>
                <li>Tetris game made using <b>Pygame</b> in Python</li>
                <li>Allows for different sized boards and difficulties</li>
                <li>Scoring function to allow for competition with others or yourself</li>
              </ul>
            </Card.Text>
            < buttonpos>
            <Button variant="outline-primary" >
            <a href="https://github.com/jasminebg/Gamedev/tree/master/pygame" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
            </Button>
            </buttonpos>
          </Card.Body>
        </Card>
      </Cardcontainer>
     
    </>
  )
}

export default Cards
