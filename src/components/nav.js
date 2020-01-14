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
  color: #FF5037;
`
const Nav = styled.div`
  align-items: flex-end;
  margin-left: auto;
`
const Button = styled.a`
  color: #5d5d5d;
  /* text-decoration: none; */
  /* background-color: transparent; */
  /* border: none; */
  padding: 10px;
  font-size: 1.5rem;

`

export default () => (
  <Bar>
    <h1>Nick Cooney</h1>
    <Nav>
      <Button onClick={() => scrollTo('#projects')}>Projects</Button>
      <Button onClick={() => scrollTo('#about')}>About</Button>
    </Nav>
  </Bar>
)
