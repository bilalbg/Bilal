import styled from 'styled-components'

export const Cardcontainer = styled.div`
  display:grid;
  z-index:999;
  height:68vh;
  max-width:100vw;
  width:50vw;
  grid-template-columns:1fr;
  grid-gap:2vw;
  justify-content:center;
  align-items:center;
  // background:lightyellow;
  padding-bottom:10px;

  @media screen and (max-width:1250px){
    grid-template-columns:1fr ;
    // height:60vh;
    width:95vw;
    grid-gap:1vw;
    padding-bottom:10vh;
    // padding:100px;
    height:70vh;
  }
  
  @media screen and (max-width:650px){
    grid-template-columns:1fr   ;
    height:90vh;
    width:90vw;
    grid-gap:2vw;
    padding-top:100px;
    // padding-bottom:100px;
    // padding:100px;
  }
  

`

export const Buttonpos = styled.div` 
position: absolute;
bottom:10px;
`
export const ulist = styled.ul`
padding:5px;
`


export const Img=styled.img`
  left:15vw;
  margin-left: 40%;
  // padding-right:0;
    width:15%;
`