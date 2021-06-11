import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Skillcontainer, Img} from './SkillElements';
import {
  
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
  git,
  matplotlib,
  numpy,
  pandas,
  pytorch,
  reactjs,
  R,
  scipy,
  sklearn
} from  '../../Images/Tools and Libraries';

const Skill = ({animate,togglefocus, pageVisible}) => {



  //only show 1 section at time or all ? carousel? or like pages? 
  // Languages - Libraries - Frameworks ? 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* <Skillscontainer pageVisible={pageVisible}> */}
      {/* activeIndex={index} onSelect={handleSelect} */}
      <div >
      <Carousel activeIndex={index} onSelect={handleSelect}  interval={100000}>
        <Carousel.Item>
          <Skillcontainer >
            <div style={{padding:'80px',display:'flex', flexWrap:'wrap', flexDirection:'row', alignItems:'center',justifyContent:'center'}} >
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
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>

          </Skillcontainer>
        </Carousel.Item>
        <Carousel.Item>
          <Skillcontainer >
            
          <div style={{padding:'80px',display:'block',display:'flex', flexWrap:'wrap', alignItems:'center',justifyContent:'center'}} >
              <Img src={docker}/>
              <Img src={git}/>
              <Img src={numpy}/>
              <Img src={pandas}/>
              <Img src={reactjs}/>
              <Img src={R}/>
              <Img src={matplotlib} style = {{width:'90px'}}/>
              <Img src={scipy} style = {{width:'90px'}}/>
              <Img src={sklearn} style = {{width:'130px'}}/>
              <Img src={pytorch}/>

            </div>
            {/* 
  docker,
  git,
  matplotlib,
  numpy,
  pandas,
  pytorch,
  reactjs,
  R,
  scipy,
  sklearn */}
            
          <Carousel.Caption>
            <h3>Libraries and Tools</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>

          </Skillcontainer>
        
        </Carousel.Item>
      </Carousel>
      </div>
{/*         
        <SkillSection>

        </SkillSection>
        <SkillSection>
          
        </SkillSection>
        <SkillSection>
          
        </SkillSection> */}

      {/* </Skillscontainer> */}
    </>
  )
}

export default Skill
