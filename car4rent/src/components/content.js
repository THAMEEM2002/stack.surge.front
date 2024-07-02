// src/script.js
import "./content.css"
const cars = [
    { 
      id: 1, 
      brand: 'Toyota', 
      model: 'Camry', 
      price: 50, 
      img: 'https://i.ytimg.com/vi/OBFEG-LiJyU/maxresdefault.jpg' 
    },
    { 
      id: 2, 
      brand: 'Honda', 
      model: 'Accord', 
      price: 55,
      img: 'https://www.usnews.com/object/image/0000018c-40eb-df39-a7fd-6bff9fe10001/01-2024-honda-accord-hybrid-angular-front-jmv.JPG?update-time=1701896347582&size=responsive640' 
    },
    { 
      id: 3, 
      brand: 'Ford', 
      model: 'Mustang', 
      price: 70,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Iy_BVHf0QKKKNrE1SSmW7ABbgX3tl8fN_USjn2_vrsVEMD9RGJGBswGfrnGvuu7CDQs&usqp=CAU' 
    },
    { 
      id: 4, 
      brand: 'Chevrolet', 
      model: 'Camaro', 
      price: 65,
      img: 'chevrolet_camaro.jpg' // Replace with the actual image file name
    },
    { 
      id: 5, 
      brand: 'Nissan', 
      model: 'Altima', 
      price: 60,
      img: 'nissan_altima.jpg' // Replace with the actual image file name
    }
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
  