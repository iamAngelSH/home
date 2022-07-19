import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section id='experience' className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2  className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <p className="lead text-center"> {experiences.message}

                    <br></br>
                    <br></br>
                        <a
                                className="btn btn-outline-dark btn-l"
                                href="https://angelsantana.io/static/media/resume.232c63ab.pdf"
                                role="button"
                                aria-label="Resume"
                            >
                            Resume
                        </a>
                        &nbsp;
                        <a
                                className="btn btn-outline-dark btn-l"
                                href="#skills"
                                role="button"
                                aria-label="Skills"
                            >
                            Skills
                        </a>
                    </p>
                    {/* <p className="lead text-center"> <u>{experiences.comingSoon}</u></p> */}
                    <Row>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;