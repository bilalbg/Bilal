import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkR} from 'react-router-dom'

export const DropBarContainer = styled.aside`
  position:fixed;
  z-index:1001;
  width:100%;
  height:100%;
  background:#272644;
  display:grid;
  alight-items:center;
  top:0;
  left:0;
  transition:0.3s ease-in-out;
  opacity:${ ({isOpen}) => (isOpen ? '100%':'0%') };
  top:${ ({isOpen}) => (isOpen ? '0':'-100%') };
`

export const CloseIcon = styled(FaTimes)`
color:white;
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

export const DropWrapper = styled.div`
color:lightblue;

`

export const DropMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;
top:5rem;

@media screen and (max-width:480px){
  grid-template-rows:repeat(6,60px);
}

`

export const DropLink = styled(LinkR)`
color:white;
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
font-weight:bold;
font-size:1.5rem;
height:100%;
cursor:pointer;
text-shadow: -1px 1px 10px rgba(0, 0, 0, 1)

$:hover{
    color:pink
    transition:0.2s ease-in-out;
}

`

export const DropBtn = styled.div`
  display:flex;
  justify-content:center;
`
export const DropRoute = styled.a`
border-radius:50px;
background:white;
white-space:nowrap;
padding:16px 64px;
color:black;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
font-weight:bold;
font-size:1.2rem;

&:hover{
    transition:all 0.2s ease-in-out;
    background: white;
    color:lightblue
}
`
