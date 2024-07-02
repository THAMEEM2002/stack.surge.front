import React from 'react';
import './content.css';

const cars = [
  { 
    id: 1, 
    brand: 'Toyota', 
    model: 'Camry', 
    price: 50, 
    img:`https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1708690549497/front-left-side-47.jpg`
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
    img: 'https://cdn.motor1.com/images/mgl/J7EjQ/s1/electric-ford-mustang-by-charge-cars.jpg' 
  },
  { 
    id: 4, 
    brand: 'Chevrolet', 
    model: 'Camaro', 
    price: 65,
    img: 'https://www.autodeal.com.ph/custom/car-model-photo/original/2019-chevrolet-camaro-5ca1c0dab9ac0.jpg' 
  },
  { 
    id: 5, 
    brand: 'Nissan', 
    model: 'Altima', 
    price: 60,
    img: 'https://www.motortrend.com/uploads/2023/08/2024-Nissan-Altima-2.5SL-AWD-001-Front-three-quarter.jpg'
  }
];

function Content() {
  // Function to handle car reservation
  const reserveCar = (carId) => {
    const pickupDate = prompt('Enter pickup date:');
    const returnDate = prompt('Enter return date:');
  
    if (pickupDate && returnDate) {
      alert(`Car with ID ${carId} reserved from ${pickupDate} to ${returnDate}`);
    } else {
      alert('Please enter pickup and return dates.');
    }
  };

  return (
    <div className="content">
      <h1>Car Inventory</h1>
      <div id="car-list">
        {cars.map(car => (
          <div key={car.id} className="car">
            <h3>{car.brand} {car.model}</h3>
            <img src={car.img} alt={`${car.brand} ${car.model}`} />
            <p>Price per day: ${car.price}</p>
            <button onClick={() => reserveCar(car.id)}>Reserve</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
