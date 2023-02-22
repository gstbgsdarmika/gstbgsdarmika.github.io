import React from 'react';
import Navigation from '../components/Navigation';
import DetailProject from '../components/DetailProject';
import Footer from '../components/Footer';

function ProjectPage() {
  return (
    <>
      <Navigation />
      <section className="project-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <DetailProject />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProjectPage;
