import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';

import { Row, Col, Button, ButtonGroup, Container, Card, CardHeader, CardBody,
TabContent, TabPane, FormGroup, Input, Label, CustomInput  } from 'reactstrap';
import sampleVideo from '../src/1.mp4'
import audio from '../src/1.mp3'
import '../src/App.css'

class App extends React.Component {
  

  constructor(props) {
    super(props);

    //Create Chart Reference
    this.ref={

  }

    this.state = {
      play: false,
    }
    // this.audio = new Audio(Audio)
  
  }

  componentDidMount() {
    new Audio(audio).play();
  }

render() {
  return (
    <Fragment>
      <div>
        <video className='VideoTag' autoPlay loop muted>
          <source src={sampleVideo} type='video/mp4'/>
        </video>
      </div>
      <div style={{position: "absolute"}}>
      <Card className="card-hover-shadow profile-responsive card-border signInCard">
          <CardHeader className="col-12 card-header-tab card-header-tab-animation bg-dark" style={{textAlign: "center"}}>
            <div className="page-title-heading" style={{color:"white", fontSize:"medium"}}>
               MEMENTO
            </div>  
          </CardHeader>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">ENTER CHAMBER</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">APPLY TO HOGWARTS</button>
                </li>
            </ul>
          <CardBody className="">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <Col>
                <Row>
                  <Label className="">User Name</Label>
                </Row>
                <Row>
                  {/* <Input></Input> */}
                  <input type="text" className="form-control" id="validationServer01" onChange={this.handleFirstName} placeholder="State Your Name" autocomplete="off" required/>
                </Row>
                <Row>
                  <Label>Password</Label>
                </Row>
                <Row>
                  <Input type="password" name="password" id="examplePassword" onChange={this.handlePassword} placeholder="Cast Your Spell"/>
                </Row>
                <Row>
                  <Button  className="mt-3">ENTER</Button>
                </Row>
                </Col>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <Col>
                <Row>
                  <Label className="">User Name</Label>
                </Row>
                <Row>
                  {/* <Input></Input> */}
                  <input type="text" className="form-control" id="validationServer01" onChange={this.handleFirstName} placeholder="State Your Name" autocomplete="off" required/>
                </Row>
                <Row>
                  <Label className="">Email</Label>
                </Row>
                <Row>
                  {/* <Input></Input> */}
                  <input type="text" className="form-control" id="validationServer01" onChange={this.handleFirstName} placeholder="Seceret Code" autocomplete="off" required/>
                </Row>
                <Row>
                  <Label>Password</Label>
                </Row>
                <Row>
                  <Input type="password" name="password" id="examplePassword" onChange={this.handlePassword} placeholder="Cast Your Spell"/>
                </Row>
                <Row>
                  <Label>Confirm Password</Label>
                </Row>
                <Row>
                  <Input type="password" name="password" id="examplePassword" onChange={this.handlePassword} placeholder="Confirm Your Spell"/>
                </Row>
                <Row>
                  <Button  className="mt-3">APPLY</Button>
                </Row>
                </Col>
                      
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
  }
}

export default App;
