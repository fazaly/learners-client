import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseInitial = () => {
    return (
        <Container>
                <Row>
                    <Col lg = "4 d-none d-lg-block mt-3">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg = "8">
                        <Course></Course>
                    </Col>
                </Row>
                
        </Container>
    );
};

export default CourseInitial;