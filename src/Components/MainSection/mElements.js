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

export const Mainbg = styled.img`
  positon:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
`

export const Imagebg = styled.img`
  width:100%;
  height:100%;
  -o-object-fit:cover;
  object-fit:cover;
`

export const MainContent = styled.div`
  z-index:0;
  max-width:1200px;
  position:absolute;
  padding:8px 24px;
  display:flex;
  flex-direction:column;
  alighn-items:center;
`
export const MainH1 = styled.h1`
  color=black;
  font-size:48px;
  text-align:center;
  font-weight:bold;

  @media screen and (max-width:768px){
    font-size:40px;
  }
  @media screen and (max-width:480){
    font-size:32px;
  }

`
export const MainP1 = styled.p`
  color=black;
  font-size:24px;
  text-align:center;
  font-weight:bold;
  max-width:600px;

  @media screen and (max-width:768px){
    font-size:20px;
  }
  @media screen and (max-width:480){
    font-size:16px;
  }

  
`