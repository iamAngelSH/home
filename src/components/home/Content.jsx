import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";
// import {
//     content
//   } from "../editable-stuff/config.js";

const yt_text = 'Projects, Tech, Career, Life!';

function BasicExample({heading, message, cmsm, yt_text}) {
    return (
        <Jumbotron fluid id="projects" className="bg-light m-0">
          <Container className="">
            <h2 className="display-4 pb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}
              </p>
              <p className="lead text-center">{cmsm}
              </p>
            <Row>{   
            <>
            <Col>
                <Card className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Youtube ~ Angel In Tech</Card.Title>
                        <Card.Text>
                            {(!yt_text)?"":yt_text || <Skeleton count={3} />}
                            {/* Creating fun Python <span role='img' aria-label={`Python Snake`}>🐍</span> content! Data Science, Data Engineering, Machine Learning! */}
                        </Card.Text>
                        <Button variant="dark outline-light"><a
                            key={`social-icon-1`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://www.youtube.com/channel/UC_wflkTmHOsQ0gTrDhOs7bQ?sub_confirmation=1'
                            aria-label={`My Twitch`}
                        >
                            <i className={`fab fa-youtube  fa-1x socialicons`} />
                        </a></Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Github ~ iamAngelSH</Card.Title>
                        <Card.Text>
                            Data Science, Machine Learning, Data Engineering content!
                        </Card.Text>
                        <Button variant="dark outline-light"  display ='flex'><a 
                            key={`social-icon-1`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://github.com/iamAngelSH'
                            aria-label={`My Twitch`}
                        >
                            <i className={`fab fa-github  fa-1x socialicons`} />
                        </a></Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='card shadow-lg p-3 mb-5 bg-white rounded'>
                    {/* <Card.Img variant="top" src="../editable-stuff/twitchBanner.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Twitch.tv ~ iamAngelSH</Card.Title>
                        <Card.Text>
                            Come relax, chill, and enjoy the vibes as I game or work on projects!
                        </Card.Text>
                        <Button variant="dark outline-light"><a
                            key={`social-icon-1`}
                            target="_blank"
                            rel="noopener noreferrer"
                            href='https://twitch.tv/iamangelsh'
                            aria-label={`My Twitch`}
                        >
                            <i className={`fab fa-twitch  fa-1x socialicons`} />
                        </a></Button>
                    </Card.Body>
                </Card>
            </Col>
            </>
            }</Row>
          </Container>
        </Jumbotron>
      );
}

export default BasicExample;


