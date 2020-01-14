import React from 'react';
import { Col, Row, Container, Navbar, Image } from 'react-bootstrap';
import Nav from './nav';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import headshot from '../assets/images/head.png';
import cv from '../assets/images/CV.pdf';

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
const Email = styled.a`
  font-size: 1.5rem;
  /* background-color: #FF5037; */
  border: none;
  color: white;
  margin-right: 10px;
  display: block;
  &:focus {
    outline: none;
  }
  &:hover {
    /* transform: scale(1.1);
    transition: 100ms; */
    color: #5d5d5d;
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
          <h2>Hi there! My name is Nick and I'm a Graphic Designer turned Junior Software Engineer, based in Sydney.</h2>
        </Blurb>
          <Email href={cv}>Resume</Email>
        </Col>
      </Row>
    </Hero>
  </Container>
  </Header>
)
