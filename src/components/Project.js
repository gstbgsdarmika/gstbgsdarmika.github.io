import React from 'react';
import Button from 'react-bootstrap/Button';
import CardProject from './CardProject';

function Project() {
  return (
    <section className="project" id="project">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-md-start">
            <h1>Featured Project</h1>
            <p>The projects I&apos;ve worked on range from UI/UX designs to websites</p>
          </div>
          <CardProject />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="more">More Project</Button>
        </div>
      </div>
    </section>
  );
}

export default Project;
