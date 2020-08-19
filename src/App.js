import React from 'react';
// import './App.css';
import Navbar from './Animated-React-Website/component/Navbar'
import Home from './Animated-React-Website/component/Home'
import About from './Animated-React-Website/component/About'
import Features from './Animated-React-Website/component/Features'
import Courses from './Animated-React-Website/component/Courses'


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <About />
       <Features />
       <Courses />
    </div>
  );
}

export default App;
