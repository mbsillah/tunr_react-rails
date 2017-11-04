import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.div`
display: flex;

`

const NavBar = () => {
    return (
        <NavStyle>
          <h1>Tunr</h1>
          <Link to="/">All Artist</Link>  
        </NavStyle>
    );
};

export default NavBar;
