import React from "react";
import './toy.css';
import { Button , Form , Col , Row, Container } from 'react-bootstrap';


export default function Loginx() {
    return (
      <div>

        <br />
        <Container className='rtpv'>
      <Row className='rubil'>
      <Col sm={6} className="modiin">
         
      </Col>

      <Col sm={6} className="modin">
      <Form>
        <h5 className="ron">Login</h5> <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email"  required/>
        <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required />
  </Form.Group>
  <div className="d-grid gap-2">
  <Button variant="danger" type="submit" className="et" >
    Proceed
  </Button>
   </div> <br/>
    <p className="da"> Not Register Yet? <a href="/signup" className="ett">Sign-Up</a> </p>
</Form>
   
      </Col>
      </Row>
      </Container>
      <hr />

      </div>
    );
  }