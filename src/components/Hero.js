import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hero() {
  useEffect(() => {
    AOS.init();
    gsap.from('.hero-image', {
      y: -25, repeat: -1, yoyo: true, duration: 2.5,
    });
  }, []);
  return (
    <div className="hero">
      <div className="container">
        <div className="blur" />
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 order-1 order-md-0">
            <div className="hero-description text-center text-md-start" data-aos="fade-right" data-aos-duration="1500">
              <h1>Hi, I&apos; m Bgs Darmika </h1>
              <p>
                I am a Front-End Developer & UI/UX Designer with more than
                2+ years experience and a student at Udayana University majoring in Informatics.
              </p>
              <Link to="/contact">
                <Button className="contant">Contant</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-4 offset-md-2 order-0 order-md-1">
            <div className="hero-image">
              <img src="images/hero.png" alt="Bgs Darmika" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
