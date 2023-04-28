import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <ContenedorHeader>
          <Titulo>Mi blog personal</Titulo>
          <Navegacion>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </Navegacion>
        </ContenedorHeader>
    </div>
  )
}

const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Navegacion = styled.nav`
  a{
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }
  a:hover{
    color: #19168;
  }

  a.active{
    border-bottom: 2px solid #165168;
    padding-bottom: 10px;
  }
`;

export default Header
