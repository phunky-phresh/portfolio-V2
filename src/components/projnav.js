import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';
import Arrow from '../assets/images/arrow-left-solid.svg';


const SVG = styled.img`
  max-width: 50px;
`

export default () => (
  <div>
    <Link to='/' ><SVG src={Arrow} /></Link>
  </div>
)
