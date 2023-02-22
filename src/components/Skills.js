import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <h1 className="mb-3 text-center">Tools & Skills</h1>
          <div className="list-skills d-flex justify-content-center gap-3 gap-md-4 gap-lg-5">
            <img src="images/icons/html.svg" alt="HTML" data-aos="fade-up" data-aos-duration="1000" />
            <img src="images/icons/css.svg" alt="CSS" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" />
            <img src="images/icons/javascript.svg" alt="JavaScript" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150" />
            <img src="images/icons/mysql.svg" alt="MYSQL" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
            <img src="images/icons/php.svg" alt="PHP" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" />
          </div>
          <div className="mt-3 mt-md-4 list-frameworks d-flex justify-content-center gap-3 gap-md-4 gap-lg-5">
            <img src="images/icons/react.svg" alt="React" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
            <img src="images/icons/laravel.svg" alt="Laravel" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350" />
            <img src="images/icons/bosstrap.svg" alt="Bosstrap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
            <img src="images/icons/tailwindcss.svg" alt="Tailwind CSS" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" />
            <img src="images/icons/figma.svg" alt="Figma" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
