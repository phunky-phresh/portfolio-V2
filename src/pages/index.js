import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import Work from '../components/work';
import { Helmet } from 'react-helmet';

import scrollTo from 'gatsby-plugin-smoothscroll';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import favicon from '../assets/images/nc.png'
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

 const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  margin-top: 4rem;
 `
 const Projects = styled.div`
   display: flex;
   flex-wrap: wrap;
   /* height: 100vh; */
   width: 100vw;
   margin-top: 4rem;
 `

export default () => (
  <div>
  <Helmet>
    <title>Nick Cooney</title>
    <link rel="icon" href={favicon} />
  </Helmet>
    <Section>
      <Header />
    </Section>
    <Projects id="projects">
      <Work />
    </Projects>
    <Section id="about">
      <About />
    </Section>
  </div>
)
