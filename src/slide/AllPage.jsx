import React from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import MyPortofolio from './Portofolio';
import Contact from './Contact';
import Footer from '../components/Footer';
import '../App.css';

const AllPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <MyPortofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default AllPage;