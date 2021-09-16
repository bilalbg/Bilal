import React from 'react';
import { FaBars } from 'react-icons/fa';
// import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import Resume from "../../Images/Jasmine_Baig_Resume.pdf"
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
                    <NavLogo to = '/' onClick={toggleHome}>Jasmine</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about"
                            > About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects"
                            > Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/skills" 
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
