/*import logo from './logo.svg';
import './App.css';
import Content from '../src/components/content'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// src/App.js
import React, { useEffect } from 'react';
import { displayCars, reserveCar } from './components/content';
//import { displayCars, reserveCar } from './content'; // Adjust './content' to the correct path if necessary
 // Importing from your script.js

function App() {
  useEffect(() => {
    displayCars(); // Display cars when component mounts
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Rental Service</h1>
      </header>
      
      <main>
        <section id="car-list">
          {/* This div will be populated by displayCars function */}
        </section>
        
        <section id="booking">
          <h2>Book a Car</h2>
          <label htmlFor="pickup-date">Pickup Date:</label>
          <input type="date" id="pickup-date" />
          <label htmlFor="return-date">Return Date:</label>
          <input type="date" id="return-date" />
          <button onClick={() => reserveCar(1)}>Book Now</button>
        </section>
      </main>
    </div>
  );
}

export default App;

