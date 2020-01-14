import React from 'react';

import {Link} from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

import scrollTo from 'gatsby-plugin-smoothscroll';


const Bar = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 10px; */
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`
const Nav = styled.div`
  align-items: flex-end;
  margin-left: auto;
`
const Button = styled.button`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`

export default () => (
  <Bar>
    <h1>Nick Cooney</h1>
    <Nav className='nav-style'>
      <Button onClick={() => scrollTo('#projects')}>Projects</Button>
      <Button onClick={() => scrollTo('#about')}>About</Button>
    </Nav>
  </Bar>
)
