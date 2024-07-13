import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">AZ</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink><Link style={linkStyles} to="/Contact">Contact</Link></MenuLink>
        <MenuLink><Link style={linkStyles} to="/Gallery">Gallery</Link></MenuLink>
      </Menu>
    </Nav>
  );
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3001;
  padding: 0 2rem;
  display: flex;
  backdrop-filter: blur(10px);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  transition: all 0.3s ease-in;
  font-family: 'Shadows Into Light', sans-serif;
  &:hover {
    color: cyan;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: 'teko',cursive;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;
  &:hover {
    color: cyan;
  }
`;

export default Navbar;
