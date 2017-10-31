import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.div`

`

const NavBar = () => {
    return (
        <div>
          <Link to="/">All Artist</Link>  
        </div>
    );
};

export default NavBar;
