import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom'


export const Nav=styled.nav`

background:#272644;
padding:48px 24px;
flex-direction:row;
height:80px;
top:0;
position:fixed;
width:100%;
z-index:1000;
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;

@media scren and (max-width:960px){
    transition:0.8s all ease;
    height:80px;
}

`


export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;
`

export const NavLogo = styled(LinkR)`
    color:white;
    justify-self:cflex-start;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
    text-shadow: -1px 1px 10px rgba(0, 0, 0, 1)
    &:hover {
        text-emphasis: none;
        text-decoration: none;
        color:black;
        
      }
      
`
export const OpenIcon = styled(FaBars)`
color:white;
`


export const MobileIcon= styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,95%);
        font-size:1.8rem;
        cursor:pointer;
        color:black;

    }

`

export const NavMenu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    margin-right:-22px;
    margin-top:12px;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height:80px;
    &:hover {
        filter: brightness(0.6);
      }

`
export const NavLinks = styled(LinkR)`
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    font-size:1.5rem;
    font-weight:bold;
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
  
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`


export const NavBtnLink = styled.a`
border-radius:50px;
background:white;
white-space:nowrap;
padding:10px 22px;
color:black;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
font-weight:Bold;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background: white;
    color:#272644
}
`
