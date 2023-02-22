import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navigation />
      <section className="home-page">
        <Hero />
        <Project />
        <Skills />
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
