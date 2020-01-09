import React from 'react';
import styled from '@emotion/styled';

import {Link} from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

const AboutLinks = styled.a`

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
    <Row>
      <h1>Skills</h1>
    </Row>
  </Container>
)
