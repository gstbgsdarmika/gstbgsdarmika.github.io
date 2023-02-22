import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiOpenFolder } from 'react-icons/gi';

function CardProject() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="project-list">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-12 col-md-4 mb-2" data-aos="fade-right" data-aos-duration="1500">
          <div className="project-card position-relative">
            <div className="card-body d-flex justify-content-between">
              <div className="left-card-body">
                <h4>Mobile App Desain</h4>
                <p>HaiPsikologi</p>
              </div>
              <div className="right-card-body d-flex">
                <GiOpenFolder />
                <h4 className="ms-2 mt-1">Case Study</h4>
              </div>
            </div>
            <div className="poster-project">
              <img src="images/card 1.png" alt="project 1" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-2" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
          <div className="project-card position-relative">
            <div className="card-body d-flex justify-content-between">
              <div className="left-card-body">
                <h4>Mobile App Desain</h4>
                <p>Luister</p>
              </div>
              <div className="right-card-body d-flex">
                <GiOpenFolder />
                <h4 className="ms-2 mt-1">Case Study</h4>
              </div>
            </div>
            <div className="poster-project">
              <img src="images/card 2.png" alt="project 2" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-2" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150">
          <div className="project-card position-relative">
            <div className="card-body d-flex justify-content-between">
              <div className="left-card-body">
                <h4>Mobile App Desain</h4>
                <p>Interior shop</p>
              </div>
              <div className="right-card-body d-flex">
                <GiOpenFolder />
                <h4 className="ms-2 mt-1">Case Study</h4>
              </div>
            </div>
            <div className="poster-project">
              <img src="images/card 3.png" alt="project 3" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-2" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
          <div className="project-card position-relative">
            <div className="card-body d-flex justify-content-between">
              <div className="left-card-body">
                <h4>Web App Desain</h4>
                <p>EwaSons</p>
              </div>
              <div className="right-card-body d-flex">
                <GiOpenFolder />
                <h4 className="ms-2 mt-1">Case Study</h4>
              </div>
            </div>
            <div className="poster-project">
              <img src="images/card 4.png" alt="project 4" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-2" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="250">
          <div className="project-card position-relative">
            <div className="card-body d-flex justify-content-between">
              <div className="left-card-body">
                <h4>Web App Desain</h4>
                <p>MovPlay</p>
              </div>
              <div className="right-card-body d-flex">
                <GiOpenFolder />
                <h4 className="ms-2 mt-1">Case Study</h4>
              </div>
            </div>
            <div className="poster-project">
              <img src="images/card 5.png" alt="project 5" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-2" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
          <div className="project-card position-relative">
            <div className="card-body d-flex justify-content-between">
              <div className="left-card-body">
                <h4>Web App Desain</h4>
                <p>KuyFood</p>
              </div>
              <div className="right-card-body d-flex">
                <GiOpenFolder />
                <h4 className="ms-2 mt-1">Case Study</h4>
              </div>
            </div>
            <div className="poster-project">
              <img src="images/card 6.png" alt="project 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
