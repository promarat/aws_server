import StoreButton from "./components/StoreButton/StoreButton";
import BackCircle from "./assets/imgs/Background_circles.png";
import Logo from "./assets/imgs/Logo.png";
import Phone1 from "./assets/imgs/phone1.png";
import Phone2 from "./assets/imgs/phone2.png";
import Phone3 from "./assets/imgs/phone3.png";
import './App.css';
import WOW from 'wowjs';
import { useEffect, useState } from "react";
// import { SubScribeService } from "./services/subscribe.service"
import axios from "axios";
import Popup from "./components/popup/Popup";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
  const androidUrl = 'https://play.google.com';

  const HANDLE_API_URL = "http://18.191.232.197:5432/subscribe";
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  const handleChange = (e) => {
    setError(false);
    setEmail(e.target.value);
  }

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subscribe = () => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || !re.test(email)) {
      setError(true);
      return;
    }
    //Send Email to Server====================
    // SubScribeService(email);

    axios.post(HANDLE_API_URL, {email:email})
    .then(response => {
        setEmail("");
    }).catch(function (error) {
        // setEmail("");
        // alert('Thank you for your subscription! We\'ll get back to you soon!');
    });
    handleShow();
  }

  return (
    <div className="App">
      <div className="container-fluid main-container">
        <div className="page-container">
          <div className="backcircle-container">
            <div className="Ellipse-1"></div>
            <div className="Ellipse-2"></div>
            <div className="Ellipse-3"></div>
            <div className="Ellipse-4"></div>
            <div className="Ellipse-5"></div>
            <div className="Ellipse-6"></div>
            <div className="Ellipse-7"></div>
            <div className="Ellipse-8"></div>
            <div className="Ellipse-9"></div>
          </div>
          <div className="logo-wrap"> 
            <img src={Logo}/>
          </div>
          <div className="head-screen">
            <h1 className="head-title wow bounceInLeft">Raise Your <span className="head-title-voide">Voice</span></h1>
            <h5 className="description wow bounceInRight" data-wow-delay="0.3s">Short description about application and why we are cool</h5>
            <div className="button-block">
              <div className="downloadButtons mx-auto wow bounce" data-wow-delay="2s">
                <StoreButton
                  store="ios"
                  url={iOSUrl}
                  title='iOS Store Button'
                />
                <StoreButton
                  store="android"
                  url={androidUrl}
                  title='Android Store Button'
                />
              </div>
            </div>
          </div>
          <div className="page-block">
            <div className="phones-mockup mx-auto">
              <div className="phone-container wow bounceInDown" data-wow-delay="0.8s">
                <img className="phone1 phone" src={Phone1}/>
              </div>
              <div className="phone-container mid-phone wow bounceInDown" data-wow-delay="1.3s">
                <img className="phone2 phone" src={Phone2}/>
              </div>
              <div className="phone-container wow bounceInDown" data-wow-delay="1.8s">
                <img className="phone3 phone" src={Phone3}/> 
              </div>
            </div>
          </div>
          <div className="page-block">
            <div className="subscribe-form wow bounceInUp mx-auto" data-wow-duration="1.5s">
              <div className="sub-des">
                <h1 className="subscribe-title">Subscribe to us!</h1>
                <h5 className="subscribe-description">
                  Subscribe to us and we will notify you when the application is ready
                </h5>
              </div>
              <div className="sub-input">
                <div className="your-email">
                  Your email
                </div>
                <div className="text-start">
                  <input className={error ? "email-input error-state" : "email-input"} value={email} placeholder="your.email@example.com" onChange={handleChange}/>
                  <button className="subscribe-button" onClick={subscribe}>Subscribe me!</button>
                </div>
              </div>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Raise Your Voice</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thank you for your subscription! We'll get back to you soon!
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="footer page-block">
            <div>
              <img src={Logo}/>
            </div>
            <div>
              <p>
                Copyright @ 2021 Vocco. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
