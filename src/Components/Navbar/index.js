import React from 'react';
import { FaBars } from 'react-icons/fa';
// import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import Resume from "../../Images/Resume.pdf"
// import {Link} from 'react-router-dom';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
}from './NavElements';

const Navbar = ({toggle}) => {
    const toggleHome =()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo to = '/' onClick={toggleHome}>J</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about"
                            // activeStyle={{
                            //     borderBottom: "3px solid black",
                            //     color:'white'

                            // }}
                            // smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            > About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects"
                            // activeStyle={{
                            //     borderBottom: "3px solid black",
                            //     color:'white'

                            // }}
                            // smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            > Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/skills" 
                            // activeStyle={{
                            //     borderBottom: "3px solid black",
                            //     color:'white'

                            // }}
                            // smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            > Skills
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href={Resume} target="_blank" rel='noopener noreferrer'>
                            Resume
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
