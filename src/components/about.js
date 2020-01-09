import React from 'react';
import styled from '@emotion/styled';
import SkillList from './skills';
import Nue from './nueSkills';

import {Link} from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

const AboutLinks = styled.a`
  display: block;
  padding-top: 1rem;
  font-size: 1.5rem;
  margin-left: 1.5rem;
`


export default () => (
  <Container>
    <h1>About me</h1>
    <Row>
    <Col md={4}>
      <AboutLinks href='https://github.com/phunky-phresh'>GitHub</AboutLinks>
      <AboutLinks href="https://www.linkedin.com/in/nicholas-cooney/">LinkedIn</AboutLinks>
      <AboutLinks href="mailto:nick.cooney94@gmail.com">Email</AboutLinks>
    </Col>
    <Col md={8}>
      <p>I’m a recent Software Engineering Immersive Graduate from General Assembly, Sydney. After completing my Bachelor of Creative Arts: Graphic Design degree, i’ve spent time working in a range of industries both in Australia and abroad.
      I consistently aim to improve on my own ability and skills while maintaining effective communication with colleagues and clients. I take pride in delivering my best and being a reliable employee. I’m excited to see what new opportunities become available in Software Engineering as i do enjoy designing, but to deliver a finished, interactive product is my true passion.</p>
      </Col>
    </Row>
    <hr/>
    <h1>Skills</h1>
    <Row>
    <Col md={4}>
      <h4>Skills I know</h4>
    </Col>
    <Col md={8}>
      <SkillList />
    </Col>
    </Row>
    <br/>
    <Row>
    <Col md={4}>
      <h4>Skills I'm Learning</h4>
      </Col>
      <Col md={8}>
      <Nue />
      </Col>
    </Row>
  </Container>
)
