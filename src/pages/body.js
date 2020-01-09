import React from 'react';
import {Col} from 'react-bootstrap';
import styled from '@emotion/styled';

import About from '../components/about';
import Work from '../components/work';

const Wrap =
  styled.div`
    height: 100vh;

  `

export default () => (
  <div>

    <Wrap><About /></Wrap>
    <Wrap><Work /></Wrap>
    <Wrap>Contact</Wrap>

  </div>
)
