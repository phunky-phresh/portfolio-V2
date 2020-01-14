import React from 'react';

import ProjNav from '../../components/projnav';
import styled from '@emotion/styled';

import tic from '../../assets/images/tic-tac-toe.png';
import { Row, Col, CardDeck, Card, Container } from 'react-bootstrap';

import ttt from '../../assets/images/tic-tac-toe.png'

const HeroImg = styled.img`
  width: 200px;
`
const Wrap = styled.div`
  max-width: 960px;
  margin: 2rem auto;
`
const Button = styled.a`
  text-decoration: none;
`
const Content = styled.div`
  width: inherit;
  margin-top: 2rem;
  text-align: center;

`
const Image = styled.img`
  width: inherit;
  margin: 2rem auto;
  /* border-radius: 10px; */
`
const Body = styled.div`
  margin: 2rem 4rem;
  text-align: left;
`
export default () => (
  <Container>
    <Wrap>
      <Row>
        <Col>
          <ProjNav />

          <Content>
          <h1>Tic Tac Toe</h1>
            <Image src={ttt} />
            <h3>JavaScript | jQuery | HTML5/CSS</h3>
            <Body>
            <p>Project0 – Tic Tac Toe, the first major project covered during my Software Engineering Immersive at GA.</p>
            <p>Project0 requirements included functionality such as:</p>
            <ul>
              <li>Build web app from scratch</li>
              <li>Utilise JavaScript, CSS and HTML files</li>
              <li>Render a board game in the browser</li>
              <li>Allow two players, switching between them</li>
              <li>Declare winners or Draws</li>
            </ul>
            <p>After completing the logic for the games function I then focused on the design and feel of the game. Utilising CSS Grid to create the game board made the game more web responsive on different screen sizes. The more fun aspects included styling the game in a Super Mario theme.</p>
            </Body>
            <div>
              <Button href="https://github.com/phunky-phresh/project0-TicTacToe">Repo</Button>
              <Button href="https://phunky-phresh.github.io/project0-TicTacToe/">Demo</Button>
            </div>
          </Content>
        </Col>
      </Row>
    </Wrap>
  </Container>
)
