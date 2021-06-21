import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import {
  Cardcontainer
}from './cardelements'

const Cards = ({ pageVisible}) => {


  return (
    <>
      <Cardcontainer pageVisible={pageVisible}>
        
      <Card style={{ height:"100%"}} >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title >Natural Language Processing</Card.Title>
            <Card.Text >
              <ul>
                <li>Used Latent Semantic Analysis to derive word represenations for an English Wiki dump text corpus</li>
                <li>Investigated Semantic Similarity between words by created a SGD matrix factorization algorithm</li>
                <li>Developed with <b>Python</b> on <b> Jupyter notebook</b> </li>
              </ul>
              {/* Used latent semantic analysis to derive word representations 
              for an English Wikipedia Dump text corpus and investigated semantic similarity
              between words by creating a SGD matrix factorization algorithm. */}
            </Card.Text>
            <Button  variant="outline-primary">
            <a href="https://github.com/jasminebg/Machine-Learning-EECS-4404-/tree/main/Project" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
              </Button>
          </Card.Body>
        </Card>
      <Card style={{ height:"100%"}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title >Webchat Application [In-progress] </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}}>
              <ul>
                <li>Webchat created using <b> GO </b> and <b>React JS </b> </li>
                <li>Uses websockets to allow for instant communication</li>
                <li>Speak with large groups of people or with a single person in private messages</li>
              </ul>
              {/* Webchat created using GOLang and React.JS. Allows for instant communication with websockets between large groups of people
              and one-on-one messages. */}
            </Card.Text>
            <Button variant="outline-primary">
            <a href="https://github.com/Jasminebg/GoLang-Webchat" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
            </Button>
          </Card.Body>
        </Card>
      <Card style={{height:"100%" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title  >Tetris [In-progress] </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              <ul>
                <li>Tetris game made using <b>Pygame</b> in Python</li>
                <li>Allows for different sized boards and difficulties</li>
                <li>Scoring function to allow for competition with others or yourself</li>
              </ul>
              {/* Created a Simple Tetris Game using Pygame.
               Allows for different sized boards, difficulties and a scoring
               function to compete with others or better yourself.  */}
            </Card.Text>
            <Button variant="outline-primary">
            <a href="https://github.com/jasminebg/Gamedev/tree/master/pygame" 
              target="_blank" rel="noreferrer"
            >
              Github repository
            </a>
            </Button>
          </Card.Body>
        </Card>
      </Cardcontainer>
      {/* <Cardcontainer pageVisible={pageVisible}>

        <Carditem>
          <Card > 
            <Front>
            <CardH1>Project A</CardH1>
            <CardP>asdgas</CardP>
              <Cardmore>Click to read More!</Cardmore>
            </Front>
            <Back>
              AAA
              
            </Back>
          </Card>
        </Carditem>
        <Carditem>
          <Card > 
            <Front>
              <CardH1>Project B</CardH1>
              <CardP>asdas</CardP>
              <Cardmore>Click to read More!</Cardmore>
            </Front>
            <Back>
              AAA

            </Back>
          </Card>
        </Carditem>
        <Carditem>
          <Card > 
            <Front>
            <CardH1>Project C</CardH1>
            <CardP>agas</CardP>
              <Cardmore>Click to read More!</Cardmore>
            </Front>
            <Back>
              AAA
              
            </Back>
          </Card>
        </Carditem>

      </Cardcontainer> */}
    </>
  )
}

export default Cards
