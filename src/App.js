import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Contact from './Components/contactform';
import Footer from './Components/footer';
import Menu from './Components/Menu';
import NavBar from './Components/navbar';




const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};


export default App;
