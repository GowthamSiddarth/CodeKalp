import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class UploadFiles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row className="Upload">
                    <Col className="my-auto" md={4} xs={0}>
                        <span className="Title">Upload Files</span>
                    </Col>
                </Row>
                <Row className="Content">
                    <Col></Col>
                </Row>
                <Row className="Files">
                    <Col></Col>
                </Row>
                <Row className="Actions">
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default UploadFiles;