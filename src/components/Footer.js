import React from 'react';
import {
  FaInstagram, FaLinkedin, FaMediumM, FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer pb-4">
      <div className="container">
        <div className="col-md-12">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-8 col-8">
              <h1>Get in touch</h1>
              <p>
                If you want to contact me, you can email gstbgsdarmika@gmail.com
                or LinkedIn.
              </p>
              <div className="sosial-media d-flex gap-2">
                <FaInstagram />
                <FaLinkedin />
                <FaMediumM />
                <FaYoutube />
              </div>
              <p className="mt-3"><strong>TahapanBelajar &copy; 2023</strong></p>
            </div>
            <div className="col-md-2 col-4">
              <div className="logo">
                <img src="images/icons/logo.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
