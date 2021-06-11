import React from 'react'
import {
  Foot,
  Footercontainer,
  Footeritems,
  Footitem,
  FooterH1,
  ContactLink
} from './footerElements'

const Footer = () => {
  return (
    <Foot>
      <Footercontainer>
        <FooterH1>Contact</FooterH1>
        <Footeritems>
          <Footitem>
            <ContactLink href="https://github.com/jasminebg" target="_blank" >
            Github
            </ContactLink>
          </Footitem>
          <Footitem>
            <ContactLink href="https://www.linkedin.com/in/jazzybaig/" target="_blank">
            LinkedIn
            </ContactLink>
          </Footitem>
          <Footitem>
            <ContactLink  href="mailto:jasminebaig9@gmail.com" >
            Email
            </ContactLink>
          </Footitem>
        </Footeritems>
        
      </Footercontainer>
    </Foot>
  )
}

export default Footer
