import React from 'react';
import { Col, Button, Container, Navbar, Image } from 'react-bootstrap';
import {Link} from 'gatsby';
import './sidebar.css';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import headshot from '../assets/images/head.png';

const Header = styled.div`
  /* background-color: gray; */
  width: 100vw;
  /* text-align: right; */
  display: inline-block;
  `
const Headshot = styled.img`
  width: 300px;
  border-radius: 100%;
  height: auto;
  /* margin: 20px; */
`
const Links = styled.div`
  color: green;
`
const Bar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
`
const Nav = styled.div`
  align-items: flex-end;
  margin-left: auto;
`
const Hero = styled.div`
  margin-top: 4rem;
`
const Blurb = styled.div`
  display: inline-block;
`

export default () => (
  <Header>
  <Container>
    <Bar>
      <Link><h2>Nicholas Cooney</h2></Link>
      <Nav className='nav-style'>
        <Link>Projects</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Nav>
    </Bar>
    <Hero>
    <Headshot src={headshot}/>
    <Blurb>
      <h3>Junior Software Engineer, ready to step into the industry.</h3  >
    </Blurb>
    </Hero>
  </Container>
  </Header>
)
