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
              Used latent semantic analysis to derive word representations 
              for an English Wikipedia Dump text corpus and investigated semantic similarity
              between words by creating a SGD matrix factorization algorithm.
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
      <Card style={{height:"100%" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title  >Tetris</Card.Title>
            <Card.Text style = {{padding:'12px 0px'}} >
              Created a Simple Tetris Game using Pygame.
               Allows for different sized boards, difficulties and a scoring
               function to compete with others or better yourself. 
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
      <Card style={{ height:"100%"}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title >Simple webchat application </Card.Title>
            <Card.Text style = {{padding:'12px 0px'}}>
              Webchat created using GOLang and React.JS. Allows for instant communication between large groups of people
              and one-on-one messages.
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
      <Card style={{ height:"100%"}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title > Shoot 'em Up Game </Card.Title>
            <Card.Text  >
              First person shoot 'em up game made using Unreal Engine. Contains scoring 
              mechanic to allow for competing with others and challenging oneself. Randomization
              of mechanics to create less monotone gameplay.
            </Card.Text>
            <Button variant="outline-primary">
            <a href="https://github.com/jasminebg/Machine-Learning-EECS-4404-/tree/main/Project" 
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
