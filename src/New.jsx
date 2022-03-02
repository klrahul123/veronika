import * as React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FadeMenu from './FadeMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './toy.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Python from './Python';
import Home from './Home';
import { ButtonGroup } from 'react-bootstrap';
import C from './C';
import Cplus from './Cplus';
import Java from './Java';
import Other from './Other';
import Error from './Error';
import Loginx from './Loginx';
import Signup from './Signup';
import Help from './Help';
import { BsChevronDoubleRight } from "react-icons/bs";


export default function New(){
    return(
        <div>
       <nav className="navbar navbar-light bg-light">
      <div class="container-fluid">
      <h3 class="me"> <BsChevronDoubleRight/> CODING HUB </h3>
      <FadeMenu/>
       </div>
     </nav>
      <Router>
      <div> 
        <div class="spe">
      <ButtonGroup className="mb-2" size="lg">
      <Link class="wele" to="/">Home</Link>
      <Link class="wele" to="/c">C</Link>
      <Link class="wele" to="/java">Java</Link>
      <Link class="wele" to="/c++">C++</Link>
      <Link class="wele" to="/python">Python</Link>
      <Link class="wele" to="/help">Help</Link>
      <Link class="weq" to="/login">Login</Link>
      <Link class="wele" to="/signup">Sign Up</Link>
      </ButtonGroup>
      </div>
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route exact path="/help">
            <Help/>
          </Route>

          <Route exact path="/login">
             <Loginx/>
          </Route>
          <Route exact path="/signup">
              <Signup/>
          </Route>

          <Route exact path="/c">
            <C/>
            </Route>
            <Route exact path="/c++">
            <Cplus/>
            </Route>
          <Route path="/java">
            <Java/>
          </Route>
          
          <Route path="/python">
            <Python/>
          </Route>
          <Route path="/other">
            <Other/>
          </Route>
          <Route path="/*">
            <Error/>
          </Route>
        </Switch>
      </div>
     </Router>
    </div>
    );  
 }
