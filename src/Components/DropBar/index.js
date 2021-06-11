import React from 'react'
import {
  Icon,
  CloseIcon,
  DropBarContainer,
  DropWrapper,
  DropMenu,
  DropLink,
  DropBtn,
  DropRoute

} from './DropElements';

const Dropbar = ({isOpen,toggle}) => {
  return (
    <DropBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon/>
      </Icon>
      <DropWrapper>
        <DropMenu>
          <DropLink to="/about" onClick={toggle}>About</DropLink>
          <DropLink to="/projects" onClick={toggle}>Projects</DropLink>
          <DropLink to="/skills" onClick={toggle}>Skills</DropLink>
        </DropMenu>
        <DropBtn>
          <DropRoute to='/Resume'>Resume</DropRoute>
        </DropBtn>
      </DropWrapper>


    </DropBarContainer>
  )
}

export default Dropbar
