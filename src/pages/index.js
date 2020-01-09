import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import Work from '../components/work';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';

import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

 const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  margin-top: 4rem;
 `

export default () => (
  <div>
    <Section>
      <Header />
    </Section>
    <Section>
      <Work />
    </Section>
    <Section>
      <About />
    </Section>
    <Section>
      <Footer />
    </Section>
  </div>
)
