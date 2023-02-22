import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';

function DetailProject() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="detailed-project-list">
      <div className="detail-card">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            <div className="project-details-poster">
              <img src="images/card 7.png" alt="EwaSons" data-aos="fade-right" data-aos-duration="1000" />
            </div>
          </div>
          <div className="col-12 mt-5 col-md-5 col-lg-4 offset-md-1 offset-lg-2">
            <div className="project-description">
              <h2>EwaSons Web Apps</h2>
              <p>E-commerce application for e-waste. The stack :</p>
              <ul>
                <li data-aos="fade-up" data-aos-duration="700">HTML</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">CSS</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">Javascript</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">JWT</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="250">React</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">Redux</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="350">MongoDB</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">FireBase</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="450">Node.JS</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">Bootstrap</li>
              </ul>
              <Button className="detail-button mt-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="6 00">
                <a href="https://spiffy-macaron-11dfbb.netlify.app/" target="_blank" rel="noreferrer" aria-label="instagram">See Website</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-card">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6 order-1 order-md-0">
            <div className="project-description">
              <h2>KuyFood Web Apps</h2>
              <p>Restaurant finder App. The stack :</p>
              <ul>
                <li data-aos="fade-up" data-aos-duration="700">HTML</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">CSS</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">Javascript</li>
              </ul>
              <Button className="detail-button mt-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                <a href="https://scintillating-paletas-851052.netlify.app/#/restaurants" target="_blank" rel="noreferrer" aria-label="instagram">See Website</a>
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-md-6 order-0 order-md-1 mb-5 mb-md-0">
            <div className="project-details-poster">
              <img src="images/card 8.png" alt="KuyFood" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </div>
      </div>
      <div className="detail-card">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            <div className="project-details-poster">
              <img src="images/card 9.png" alt="MovPlay" data-aos="fade-right" data-aos-duration="1000" />
            </div>
          </div>
          <div className="col-12 mt-5 col-md-5 col-lg-4 offset-md-1 offset-lg-2">
            <div className="project-description">
              <h2>MovPlay Web Apps</h2>
              <p>Streamming film web based with TMDB API. The stack :</p>
              <ul>
                <li data-aos="fade-up" data-aos-duration="700">HTML</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">CSS</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">Javascript</li>
              </ul>
              <Button className="detail-button mt-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                <a href="https://63cbd5ddf84df0683c83b4bc--regal-taffy-968235.netlify.app/" target="_blank" rel="noreferrer" aria-label="instagram">See Website</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-card">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6 order-1 order-md-0">
            <div className="project-description">
              <h2>Bookshelf Web Apps</h2>
              <p>Application generates a list of books. The stack :</p>
              <ul>
                <li data-aos="fade-up" data-aos-duration="700">HTML</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">CSS</li>
                <li data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">Javascript</li>
              </ul>
              <Button className="detail-button mt-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                <a href="https://poetic-scone-123740.netlify.app/" target="_blank" rel="noreferrer" aria-label="instagram">See Website</a>
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-md-6 order-0 order-md-1 mb-5 mb-md-0">
            <div className="project-details-poster">
              <img src="images/card 10.png" alt="Bookshelf" data-aos="fade-left" data-aos-duration="2000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProject;
