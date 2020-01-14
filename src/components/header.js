import React from 'react';
import { Col, Row, Container, Navbar, Image } from 'react-bootstrap';
import Nav from './nav';
import './sidebar.css';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import headshot from '../assets/images/head.png';

import { Animated } from 'react-animated-css';
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
  &:focus {
    outline: none;
  }
`
const Email = styled.button`
  font-size: 1.5rem;
  background-color: orange;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: 100ms;
  }
`
export default () => (
  <Header>
  <Container>
    <Nav />
    <Hero>
      <Row>
        <Col>
          <Headshot src={headshot}/>
        </Col>
        <Col>
        <Blurb>
          <h3>I'm a Graphic Designer turned Junior Software Engineer, based in Sydney.</h3>
        </Blurb>
          <Email href="mailto:nick.cooney94@gmail.com">Reach Out!</Email>
        </Col>
      </Row>
    </Hero>
  </Container>
  </Header>
)
