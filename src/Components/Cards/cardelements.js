import styled from 'styled-components'
// import {animated, useSpring} from 'react-spring';

export const Cardcontainer = styled.div`
  display:${({pageVisible}) => (pageVisible ? 'grid':'none')};
  z-index:999;
  height:50vh;
  max-width:100vw;
  width:80vw;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:2vw;
  justify-content:center;
  align-items:center;
  // background:lightyellow;
  padding-bottom:10px;

  @media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr  ;
    // height:60vh;
    width:95vw;
    grid-gap:1vw;
    padding-bottom:10vh;
    // padding:100px;
  }
  
  @media screen and (max-width:550px){
    grid-template-columns:1fr   ;
    height:900px;
    width:90vw;
    grid-gap:1vw;
    padding-top:100px;
    // padding-bottom:100px;
    // padding:100px;
  }
  

`

export const buttonpos = styled.div` 
position: absolute;
bottom:10px;
`




// export const Cardst = styled.div`
//   width:35vw;
//   max-height:400px;
//   min-height:250px;
//   // padding-left:5px;
//   @media screen and (max-width:1000px){
//     width:80vw;
//   }
//   box-shadow: 10px 5px 40px 0px rgba(0,0,0,0.1);

//   &:hover {
//     box-shadow:10px 5px 40px 5px  rgba(0,0,0,0.2) ;
//     cursor: pointer;
// `

// export const Cardimg = styled.div`
//   @media screen and (max-width:1000px){
//     display:none;
//   }
// `


// export const Carditem = styled.div`
//   opacity:1;
//   border-radius:15px;
//   margin: 5px auto 5px auto;
//   width:100%;
//   height:90%;
//   background:white;
//   box-shadow: 10px 5px 40px 0px rgba(0,0,0,0.1);

//   &:hover {
//     box-shadow:10px 5px 40px 5px  rgba(0,0,0,0.2) ;
//     cursor: pointer;
//     .Cardmore {
//     transform: translate(10px, 0);
//   }
// `
// export const Front = styled.div`
// display:block;
// `


// export const CardH1 = styled.h1`
//   text-align:center;
//   color=black;
//   font-size:48px;
//   text-align:center;
//   font-weight:bold;

//   @media screen and (max-width:1300px){
//     font-size:36px;
//   }
//   @media screen and (max-width:1000px){
//     font-size:34px;
//   }
  

// `
// export const CardP = styled.p`
//   color=black;
//   font-size:24px;
//   text-align:center;
//   font-weight:bold;
//   // max-width:600px;
//   transition:.25s;

//   @media screen and (max-width:1300px){
//     font-size:20px;
//   }
//   @media screen and (max-width:1000px){
//     font-size:18px;
//   }

  
// `

// export const Cardmore = styled.div`
// font-size=15px;

// `