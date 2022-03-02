import React from "react"
import './toy.css';
import { Button , Form , Col , Row, Container } from 'react-bootstrap';

export default function Signup() {
    return (
      <div>
          <br />
        <Container className='rtpv'>
      <Row className='rubil'>
      <Col sm={6} className="modiin">
         
      </Col>

      <Col sm={6} className="modin">
      <Form>
          <h5 className="ron">Sign Up</h5> <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name"  required/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name"  required/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

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
    <p className="da">Already a member? <a href="/login" className="ett">Login</a> </p>
</Form>
   
      </Col>
      </Row>
      </Container>
      <hr />

      </div>
    );
  }