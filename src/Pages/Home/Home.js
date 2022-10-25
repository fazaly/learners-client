import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import img from '../../assets/hero-img1.png';

const Home = () => {
    return (
        <section>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg="6">
                        <div className="hero-content">
                            <h2 className="mb-4 hero-title">
                                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                            </h2>
                            <p className="mb-5">
                                <strong>Learning new things gives us a feeling of accomplishment which, in turn, boosts our confidence in our own capabilities</strong>; you'll also feel more ready to take on challenges and explore new business ventures. Acquiring new skills will unveil new opportunities and help you find innovative solutions to problems.
                            </p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img src={img} alt="" className="w-100 h-100 hero-img" />
                    </Col>
                </Row>
            </Container>
    </section>
    );
};

export default Home;