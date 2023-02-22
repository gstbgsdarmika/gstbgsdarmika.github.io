import React from 'react';
import {
  FaInstagram, FaLinkedin, FaMediumM, FaYoutube,
} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Navigation from '../components/Navigation';

function ContactPage() {
  return (
    <>
      <Navigation />
      <section className="contact-page ">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <div className="contact-image">
                <img className="rounded mx-auto d-block" src="images/hero.png" alt="Bgs Darmika" />
              </div>
              <h2 className="mt-3">Find me here :</h2>
              <div className="link-contact col-11 col-md-10 col-lg-4 d-grid gap-4 mt-4 m-auto">
                <Button href="https://www.instagram.com/gstbgsdarmika/" target="_blank" type="button">
                  <FaInstagram className="me-3" />
                  Instagram
                </Button>
                <Button href="https://www.linkedin.com/in/i-gusti-bgs-darmika-putra-35547b255/" target="_blank" type="button">
                  <FaLinkedin className="me-3" />
                  Linkedin
                </Button>
                <Button href="https://codemahasiswa.medium.com/" target="_blank" type="button">
                  <FaMediumM className="me-3" />
                  Medium
                </Button>
                <Button href="#" target="_blank" type="button">
                  <FaYoutube className="me-3" />
                  Youtube
                </Button>
                <Button href="https://drive.google.com/file/d/1QgOYjyc5OxRz25d2D6SgJc8DoaZrt6bb/view?usp=sharing" target="_blank" className="resume" type="button">
                  Download My Cv
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
