import React from 'react';
import './App.css';

import Upload from './components/upload/Upload';

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <Row style={{ height: "75vh", paddingTop: "60px" }} className="valign-wrapper">
        <Col>
          <Upload />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
