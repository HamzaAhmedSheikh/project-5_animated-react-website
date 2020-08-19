import React from 'react';
// import './App.css';
import Navbar from './Animated-React-Website/component/Navbar'
import Home from './Animated-React-Website/component/Home'
import About from './Animated-React-Website/component/About'
import Features from './Animated-React-Website/component/Features'
import Courses from './Animated-React-Website/component/Courses'
import Offer from './Animated-React-Website/component/Offer'


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Features />
       <Courses />
       <Offer />
    </div>
  );
}

export default App;
