import styled from 'styled-components'
// import {animated, useSpring} from 'react-spring';

export const Cardcontainer = styled.div`
  display:grid;
  z-index:999;
  height:70vh;
  max-width:100vw;
  width:80vw;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:2vw;
  justify-content:center;
  align-items:center;
  padding-bottom:10px;

  @media screen and (max-width:1250px){
    grid-template-columns:1fr 1fr  ;
    width:95vw;
    grid-gap:1vw;
    padding-bottom:10vh;
    height:70vh;
  }
  
  @media screen and (max-width:650px){
    grid-template-columns:1fr   ;
    height:90vh;
    width:90vw;
    grid-gap:2vw;
    padding-top:100px;
  }
  

`

export const Buttonpos = styled.div` 
position: absolute;
bottom:10px;
`
export const ulist = styled.ul`
padding:5px;
`
