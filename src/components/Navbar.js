import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink};
    color: #fff;
    font-style: italic; 
`


const MenuBars = styled.i`

`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
`

const NavMenuLinks = styled(Link)`
    ${NavLink};
`
const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">ADM</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                )
                )}
            </NavMenu>
            <h1>Navbar</h1>
        </Nav>
    )
}

export default Navbar
