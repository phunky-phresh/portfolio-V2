import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Nav from './nav';
import styled from '@emotion/styled';
import headshot from '../assets/images/head.png';
import cv from '../assets/images/CV.pdf';


const Header = styled.div`
  width: 100vw;
  display: inline-block;
  `
const Headshot = styled.img`
  width: 300px;
  border-radius: 100%;
  height: auto;
`

const Hero = styled.div`
  margin-top: 4rem;
`
const Blurb = styled.div`
  display: inline-block;
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
