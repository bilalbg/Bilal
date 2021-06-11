import styled from 'styled-components'


export const MainContainer = styled.div`

  // background:black;
  height:10vh;
  // background:black;
  display:flex;
  justify-content:center;
  align-items:center;
  // padding:0 30px;
  width:intrinsic;
  // height:100% - 160px;
  position:static;
  z-index:2;
`


export const MainContent = styled.div`
  z-index:0;
  max-width:1200px;
  // position:absolute;
  padding:8px 24px;
  display:flex;
  flex-direction:column;
  align-items:center;
`
export const MainH1 = styled.h1`
  color=black;
  font-size:3rem;
  text-align:center;
  font-weight:bold;

  // @media screen and (max-width:768px){
  //   font-size:40px;
  // }
  // @media screen and (max-width:480){
  //   font-size:32px;
  // }

`
export const MainP1 = styled.p`
  color=black;
  font-size:1.5rem;
  text-align:center;
  // font-weight:bold;
  max-width:600px;

  // @media screen and (max-width:768px){
  //   font-size:20px;
  // }
  // @media screen and (max-width:480){
  //   font-size:16px;
  // }

  
`