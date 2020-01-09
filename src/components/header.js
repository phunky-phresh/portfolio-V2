import React from 'react';
import { Col, Row, Container, Navbar, Image } from 'react-bootstrap';
import {Link} from 'gatsby';
import './sidebar.css';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import headshot from '../assets/images/head.png';

import scrollTo from 'gatsby-plugin-smoothscroll';

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
const Button = styled.button`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  border: none;
`

export default () => (
  <Header>
  <Container>
    <Bar>
      <Link><h2>Nicholas Cooney</h2></Link>
      <Nav className='nav-style'>
        <Button onClick={() => scrollTo('#projects')}>Projects</Button>
        <Button onClick={() => scrollTo('#about')}>About</Button>
      </Nav>
    </Bar>
    <Hero>
    <Row>
    <Col>
    <Headshot src={headshot}/>
    </Col>
    <Col>
    <Blurb>
      <h3>I'm a Graphic Designer turned Junior Software Engineer, based in Sydney.</h3>
    </Blurb>
    </Col>

    </Row>
    </Hero>
  </Container>
  </Header>
)
