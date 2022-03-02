import React from "react";
import './error.css';
import './toy.css';
import { Button , Form , Col , Row, Container } from 'react-bootstrap';
import emoji from './emoji.png';

export default function Error() {
    return (
      <div>
         <br />
        <Container className='rtpv'>
      <Row className='rubil'>
      <Col sm={12} className="modiina">
           <img src={emoji} alt="" />
      </Col>
      <Col sm={12} className="modiinae">
        <br />
      <div className="n">
      <h1>404...</h1> <br />
      <h2>Something Went Wrong</h2>
      </div>
      <br />
      
      
      </Col>
      </Row>
      </Container>
      <hr />
           
      </div>
    );
  }