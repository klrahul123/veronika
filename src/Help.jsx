import React from "react" 
import { Row , Col, Container, Button } from 'react-bootstrap';

export default function Help() {
    return (
      <div>
        <br /> <br />
        
        <Container className="rp">
          <hr />
  <Row>
    <Col sm={12}>
  <div className="ba">
     <h2 >Need Instant Help?</h2>
  </div>
  <hr /> <br />
    </Col>

  </Row>
  <Row className="rpp">
    <Col className="rppp" sm={6}><Button variant="success"> <a className="eq" href="/c"> Course Tutorial </a></Button></Col>
    <Col className="rppp" sm={6}><Button variant="success"> <a  className="eq" href="/"> Knowledge base </a></Button></Col>
  </Row> <br /> <br />
  <Row>
    <Col sm={12}>
      <hr />
    <div className="ba">
     <h2 >Contact Us</h2>
  </div> <hr /> <br />
  <div className="bai">
          <h4 className="fv"> E-mail: </h4><h4> rahul.gupt1235@gmail.com </h4> <br />
  </div>
  <div className="bai">
       <h4 className="fv">Whatsapp No: </h4>  <h4> 9569711966 </h4>
  </div>

    </Col>
  </Row>
</Container>
      </div>
    );
  }