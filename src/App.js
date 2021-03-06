import React, { Component, Fragment,OBJECT,PARAM,EMBED } from "react";
import ReactDOM from 'react-dom';

import { Row, Col, Button, ButtonGroup, Container, Card, CardHeader, CardBody,
TabContent, TabPane, FormGroup, Input, Label, CustomInput  } from 'reactstrap';
import sampleVideo from '../src/1.mp4'
import audio from './1.mp3'
import '../src/App.css'
import $ from 'jquery'; 
// import Howl from "howler"
let audioPlay = new Audio(audio)

class App extends React.Component {
  

  constructor(props) {
    super(props);

    //Create Chart Reference
    this.ref={

  }

    this.state = {
      play: false,
      userName : "",
      password : "",
    }
    // this.audio = new Audio(Audio)
  
  }

  componentDidMount = async() => {

    // audioPlay.load();
    // $("#test").get(0).play();
    // document.getElementById("my_audio").click();
    setTimeout(() => {
      // new Audio(audio).play();
      // document.getElementById("test").pause();
      // document.getElementById("test").setAttribute('src', audio);
      // document.getElementById("test").load();
      // document.getElementById("test").play();
      // $( "#cardID" ).click();
      // // $('body').trigger('click')
      // // $("#my_audio").trigger("click");
      // document.getElementById("test").setAttribute('muted', '');
      // document.getElementById("videoTag").setAttribute('muted', '');
      // // $("#test").get(0).play();
      // // document.getElementById("my_audio").click();
      // // $(".my_audio").trigger('load');
      // document.querySelector('signInCard').addEventListener('click', function() {
      //   new Audio(audio).play();
      // });
    },3000)

    var context = new AudioContext();

    // window.onload = function() {
    //   var context = new AudioContext();
    //   // Setup all nodes
    //   // ...
    // }
    
    // One-liner to resume playback when user interacted with the page.
    

    // window.onload = function() {
    //   // $( "#my_audio" ).click();
    //   $("#test").get(0).play();
    //   // document.getElementById("my_audio").click();
    //   // $(".my_audio").trigger('load');
    //   // document.getElementById("my_audio").click();
    // }
  // document.body.addEventListener("mouseenter", function () {
  //         $( "#my_audio" ).click();
  // })
    // $(".my_audio").trigger('load');

    // var sound = new Howl({
    //   src: ["./1.mp3"],
    //   volume: 1.0,
    //   onend: function () {
    //     alert('We finished with the setup!');
    //   }
    // });
    // sound.play()
  }

  audioLoad = () => {
      new Audio(audio).play();
      // $("#test").get(0).play();
      // document.getElementById("test").setAttribute('muted', 'false');

      // console.log($("#test"))
      // audio.muted = false;
      // audioPlay.play()
      // console.log("hi")
  }

  handleUserName = (e) =>{
    // console.log(e.currentTarget.value)
    this.setState({
      userName : e.currentTarget.value,
    })
  }

  handlePassword = (e) =>{
    // console.log(e.currentTarget.value)
    this.setState({
      password : e.currentTarget.value,
    })
  }

render() {
  return (
    <Fragment>
      <div>
        <video className='VideoTag' id="videoTag" autoPlay loop playsInline muted>
          <source src={sampleVideo} type='video/mp4'/>
        </video>
        {/* <button type="button" id ="my_audio" data-bs-display="static" onClick = {this.audioLoad} style={{position: "absolute",zIndex:"10000"}} >hi</button>
          <audio id="test"  src={audio} type="audio/mpeg" controls autoplay loop muted>
              <source src={audio} type="audio/mpeg"/>
          </audio> */}
      </div>
      <div style={{position: "absolute"}}>
      <Card className="card-hover-shadow profile-responsive card-border signInCard" id = "cardID">
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
                  <input type="text" className="form-control" id="validationServer01" onChange={this.handleUserName} placeholder="State Your Name" autocomplete="off" required/>
                </Row>
                <Row>
                  <Label>Password</Label>
                </Row>
                <Row>
                  <Input type="password" name="password" id="examplePassword" onChange={this.handlePassword} placeholder="Cast Your Spell"/>
                </Row>
                <Row>
                  <Button  className="mt-3" onClick = {this.validate}>ENTER</Button>
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
                  <input type="text" className="form-control" id="validationServer01" onChange={this.handleUserName} placeholder="State Your Name" autocomplete="off" required/>
                </Row>
                <Row>
                  <Label className="">Email</Label>
                </Row>
                <Row>
                  {/* <Input></Input> */}
                  <input type="text" className="form-control" id="validationServer01" onChange={this.handleEmail} placeholder="Seceret Code" autocomplete="off" required/>
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
