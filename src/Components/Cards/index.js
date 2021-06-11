import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Cards.css'
import {
  Cardcontainer,
  Cardst
}from './cardelements'

const Cards = ({animate,togglefocus, pageVisible}) => {


  return (
    <>
      <Cardcontainer pageVisible={pageVisible}>
        
      <Card style={{ Cardst}} >
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
              target="_blank"
            >
              Github repository
            </a>
              </Button>
          </Card.Body>
        </Card>
      <Card style={{Cardst }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title  >Tetris</Card.Title>
            <Card.Text >
              Created a Simple Tetris Game using Pygame.
            </Card.Text>
            <Button variant="outline-primary">
            <a href="https://github.com/jasminebg/Gamedev/tree/master/pygame" 
              target="_blank"
            >
              Github repository
            </a>
            </Button>
          </Card.Body>
        </Card>
      <Card style={{ Cardst}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title >Simple webchat application </Card.Title>
            <Card.Text >
              Webchat created using GOLang and React.JS.
            </Card.Text>
            <Button variant="outline-primary">
            <a href="https://github.com/jasminebg/Machine-Learning-EECS-4404-/tree/main/Project" 
              target="_blank"
            >
              Github repository
            </a>
            </Button>
          </Card.Body>
        </Card>
      <Card style={{ Cardst}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title > Game </Card.Title>
            <Card.Text  >
              Small game made using Unreal Engine.
            </Card.Text>
            <Button variant="outline-primary">
            <a href="https://github.com/jasminebg/Machine-Learning-EECS-4404-/tree/main/Project" 
              target="_blank"
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
