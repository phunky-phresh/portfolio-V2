import React from 'react';

import { Row, Col, CardDeck, Card, Button, Container } from 'react-bootstrap';

import bf from '../assets/images/board-files-img.png';
import ttt from '../assets/images/tic-tac-toe.png';

export default () => (
  <Container>
    <h1>Projects</h1>
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={ttt} />
        <Card.Body>
          <Card.Title>Tic Tac Toe</Card.Title>
          <Card.Text>
            The classic Tic Tac Toe, built with JS, jQuery and HTML5/CSS. Themed to the Super Mario Universe.
          </Card.Text>
          <Button>View Project</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={bf} />
        <Card.Body>
          <Card.Title>Board Files</Card.Title>
          <Card.Text>
            A snowboard review platform. Sharing opinions and technology. Built with Ruby on Rails.
          </Card.Text>
          <Button>View Project</Button>
        </Card.Body>
      </Card>
    </CardDeck>
    <br/>
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Social Bet</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Button>View Project</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>mixedBiz</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
          <Button>View Project</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  </Container>
)
