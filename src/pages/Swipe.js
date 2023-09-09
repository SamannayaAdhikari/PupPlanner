import React, { useState } from 'react';
import './Swipe.css'; // Import your CSS here
import Header from '../components/Header';
import pet1 from './pet1.jpg';
import pet2 from './pet2.jpg';
import pet3 from './pet3.jpg';
import Sidebar from '../components/Sidebar';

function Swipe() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      name: 'Tommy',
      image: pet1,
      age: 22,
      distance: 200,
      address: 'Saro Park, Near Ganesh Chowk, Delhi -7 ',
      owner: 'Amit',
      breed: 'pomeranian ',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Tomato',
      image: pet2,
      age: 22,
      distance: 2,
      address: 'Sector 65, Noida',
      owner: 'July',
      breed: 'pencil',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Sheru',
      image: pet3,
      age: 22,
      distance: 2,
      address: 'Sector 65, Noida',
      owner: 'July',
      breed: 'pencil',
      gender: 'Male',
    },
    // Add more user recommendations here
  ]);

  const [currentRecommendation, setCurrentRecommendation] = useState(0);

  const handleSwipeLeft = () => {
    // Handle left swipe logic here
    setCurrentRecommendation(currentRecommendation + 1);
  };

  const handleSwipeRight = () => {
    // Handle right swipe logic here
    setCurrentRecommendation(currentRecommendation + 1);
  };

  return (
    <div className="swipe-container">
      <Header props="Find a Partner" />
      <Sidebar />
      {recommendations.map((user, index) => {
        if (index < currentRecommendation) {
          return null; // Already swiped left or right
        }

        return (
          <div key={user.id} className="user-card">
            <div className="main-info">
              <img src={user.image} alt={user.name} />
              <h3>{user.name}</h3>
              <div className="swipe-buttons">
                <button onClick={handleSwipeLeft}>Swipe Left</button>
                <button onClick={handleSwipeRight}>Swipe Right</button>
              </div>
            </div>
            <div className="details">
              <h3>{user.age} Months</h3>
              <div className="details-in">{user.distance} Miters Away </div>
              <div className="details-in"> Address : {user.address} </div>
              <div className="details-in">Own by : {user.owner} </div>
              <div className="details-in">breed : {user.breed} </div>
              <div className="details-in">Gender : {user.gender} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Swipe;
