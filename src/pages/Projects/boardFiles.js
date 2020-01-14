import React from 'react';

import ProjNav from '../../components/projnav';
import styled from '@emotion/styled';

import tic from '../../assets/images/tic-tac-toe.png';
import { Row, Col, CardDeck, Card, Container } from 'react-bootstrap';

import img from '../../assets/images/board-files-img.png'

const HeroImg = styled.img`
  width: 200px;
`
const Wrap = styled.div`
  max-width: 960px;
  margin: 2rem auto;
`
const Button = styled.a`
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  background-color: orange;
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
          <h1>Board Files</h1>
            <Image src={img} />
            <hr/>
            <h3>Rails | Heroku | Bootstrap</h3>
            <Body>
            <p>For Project 01 my goal was to create a Snowboard review app. It would also include educational content to give better understanding of the technology involved with snowboard design, technology that can have significant influence over a snowboards compatibility with a rider based off their experience, where they're using it and how they're using it.</p>
            <p>Project0 requirements included functionality such as:</p>
            <ul>
              <li>Models. Your app should have at least 3 models. Make sure they are associated correctly!</li>
              <li>Views. Use partials to DRY (Don’t Repeat Yourself) up your views.</li>
              <li>Handles invalid data. Forms in your application should validate data and handle incorrect inputs. Validate sign up information, verify valid email addresses and secure passwords.</li>
              <li>Use Gems Use a GEM that talks to an API to add functionality to your app.</li>
              <li>User Login. Make sure you have basic authentication and authorization set up (if you need it).</li>
              <li>Heroku. Deploy your code to Heroku.</li>
            </ul>
            <p>Project01 was also our first use of a database.</p>
            </Body>
            <div>
              <Button href="https://github.com/phunky-phresh/project01">Repo</Button>
              <Button href="https://board-reviews.herokuapp.com/">Demo</Button>
            </div>
          </Content>
        </Col>
      </Row>
    </Wrap>
  </Container>
)
