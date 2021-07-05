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
import Resume from "../../Images/Bilal_Baig_Resume.pdf"

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
          <DropRoute href={Resume} target="_blank" rel='noopener noreferrer'>Resume</DropRoute>
        </DropBtn>
      </DropWrapper>


    </DropBarContainer>
  )
}

export default Dropbar
