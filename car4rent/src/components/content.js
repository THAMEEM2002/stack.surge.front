// src/script.js
import "./content.css"
const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', price: 50 },
    { id: 2, brand: 'Honda', model: 'Accord', price: 55 },
    { id: 3, brand: 'Ford', model: 'Mustang', price: 70 },
    { id: 4, brand: 'Chevrolet', model: 'Camaro', price: 65 },
    { id: 5, brand: 'Nissan', model: 'Altima', price: 60 }
  ];
  
  export function displayCars() {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';
  
    cars.forEach(car => {
      const carElement = document.createElement('div');
      carElement.classList.add('car');
      carElement.innerHTML = `
        <h3>${car.brand} ${car.model}</h3>
        <p>Price per day: $${car.price}</p>
        <button onclick="reserveCar(${car.id})">Reserve</button>
      `;
      carList.appendChild(carElement);
    });
  }
  
  export function reserveCar(carId) {
    const pickupDate = document.getElementById('pickup-date').value;
    const returnDate = document.getElementById('return-date').value;
  
    if (pickupDate && returnDate) {
      alert(`Car with ID ${carId} reserved from ${pickupDate} to ${returnDate}`);
    } else {
      alert('Please select pickup and return dates.');
    }
  }
  