import React from "react";
import { Button } from 'react-bootstrap';
import { FcUp } from "react-icons/fc";
import './toy.css';
import { FcHome } from "react-icons/fc";


export default function Python() {
    return (
      <div>
        <br /> 
      JAVA COMING SOON... <br /> <br />
      <a href="/c++"> <Button variant="warning" className="bray"> <FcUp/> Back To TOP</Button> </a>
      <a href="/"> <Button variant="warning"> <FcHome/> Back To Home</Button> </a>
      </div>
    );
  }
