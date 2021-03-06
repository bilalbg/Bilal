import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Skillcontainer, Img} from './SkillElements';
import {
  GO,
  C,
  CPP,
  html,
  java,
  JS,
  python,
  sql
} from '../../Images/Langs';
import {
  docker,
  matplotlib,
  numpy,
  pandas,
  git,
  pytorch,
  reactjs,
  R,
  scipy,
  sklearn
} from  '../../Images/Tools and Libraries';

const Skill = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div >
      <Carousel activeIndex={index} onSelect={handleSelect}  interval={100000}>
        <Carousel.Item>
          <Skillcontainer >
            <div style={{padding:'80px',display:'flex', flexWrap:'wrap', flexDirection:'row', alignItems:'center',justifyContent:'center'}} >
              <Img src={GO}/>
              <Img src={C} style = {{width:'80px'}}/>
              <Img src={CPP} style = {{width:'80px'}}/>
              <Img src={html}/>
              <Img src={java}/>
              <Img src={JS}/>
              <Img src={python}/>
              <Img src={sql}/>

            </div>
            
          <Carousel.Caption>
            <h3>Languages</h3>
          </Carousel.Caption>

          </Skillcontainer>
        </Carousel.Item>
        <Carousel.Item>
          <Skillcontainer >
            
          <div style={{padding:'80px',display:'flex', flexWrap:'wrap', alignItems:'center',justifyContent:'center'}} >
              <Img src={docker}/>
              <Img src={numpy}/>
              <Img src={pandas}/>
              <Img src={reactjs}/>
              <Img src={R}/>
              <Img src={pytorch}/>
              <Img src={matplotlib} style = {{width:'90px'}}/>
              <Img src={scipy} style = {{width:'90px'}}/>
              <Img src={sklearn} style = {{width:'130px'}}/>
              <Img src={git}/>

            </div>
            
          <Carousel.Caption>
            <h3>Libraries and Tools</h3>
          </Carousel.Caption>

          </Skillcontainer>
        
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  )
}

export default Skill
