import styled from 'styled-components'


export const Foot=styled.footer`
  background: #272644;
  padding:48px 24px;
  flex-direction:column;

  height:80px;
  bottom:0;
  position:fixed;
  width:100%;
  z-index:1000;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 auto;

  @media scren and (max-width:960px){
      transition:0.8s all ease;
  }
`

export const Footercontainer = styled.div`
display:flex;
justify-content:space-evenly;
height:80px;
z-index:1;
font-weight:bold;
width:100%;
padding:0 24px;
max-width:1100px;
`


export const FooterH1 = styled.h1`
  color:white;
  justify-self:cflex-start;
  font-size:1.7rem;
  display:flex;
  align-items:center;
  margin-left:24px;
  font-weight:bold;
  text-decoration:none;
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 1)
  @media screen and (max-width:700px){
    margin-left:12px;
    font-size:1rem;
  }
`

export const Footeritems = styled.ul`
justify-content:center;
display:flex;
list-style:none;
margin-right:-22px;
@media screen and (max-width:700px){
  margin-right:-11px;
}

`
export const Footitem = styled.li`
height:80px;

@media screen and (max-width:700px){
  width:70px;
}
`
export const ContactLink = styled.a`
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    font-size:1.3rem;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 1)

    &:hover {
      border-bottom:3px solid black;
      text-emphasis: none;
      text-decoration: none;
      color:black;
      
    }
    @media screen and (max-width:700px){
      font-size:0.8rem;
    }
`
