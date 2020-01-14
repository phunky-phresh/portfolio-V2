import React from 'react';

import { Row, Col, CardDeck, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

import bf from '../assets/images/board-files-img.png';
import ttt from '../assets/images/tic-tac-toe.png';
import bet from '../assets/images/handshake.png';
import mixedBiz from '../assets/images/mixedBiz.png';

const Go = styled.a`
  padding: 5px;
`

export default () => (
  <Container>
    <h1>Projects</h1>
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={ttt} />
        <Card.Body>
        <h3>Tic Tac Toe</h3>
          <Card.Title>javascript | HTML/CSS</Card.Title>
          <Card.Text>
            The classic Tic Tac Toe, built with JS, jQuery and HTML5/CSS. Themed to the Super Mario Universe.
          </Card.Text>
          <Go href='https://github.com/phunky-phresh/project0-TicTacToe'>Repo</Go>
          <Go href='https://phunky-phresh.github.io/project0-TicTacToe/'>Demo</Go>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={bf} />
        <Card.Body>
        <h3>Board Files</h3>
          <Card.Title>ruby on rails</Card.Title>
          <Card.Text>
            A snowboard review platform. Sharing opinions and technology. Built with Ruby on Rails.
          </Card.Text>
          <Go href='https://github.com/phunky-phresh/project01'>Repo</Go>
          <Go href='https://board-reviews.herokuapp.com/'>Demo</Go>
        </Card.Body>
      </Card>
    </CardDeck>
    <br/>
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={bet} />
        <Card.Body>
        <h3>Social Bet</h3>
          <Card.Title>react | rails</Card.Title>
          <Card.Text>
            An app desgined to facilitate and uphold the gentleman's agreement.
          </Card.Text>
          <h6>* Repo and Demo are currently private</h6>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={mixedBiz} />
        <Card.Body>
        <h3>mixedBiz</h3>
          <Card.Title>react | firebase</Card.Title>
          <Card.Text>
            Realtime messaging. Step one of a project to streamline live music booking.
          </Card.Text>
          <Go href='https://github.com/phunky-phresh/musos'>Repo</Go>
          <Go href='https://musos-8f0c3.firebaseapp.com/#/signin'>Demo</Go>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
)
