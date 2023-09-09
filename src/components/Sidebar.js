import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="tab">Adopt</div>
      <div className="tab">Match</div>
      <div className="tab">Find Petsitter</div>
      <div className="tab">Your Matches</div>
      <div className="tab">Your Choices</div>
      <div className="tab">Logout</div>
      <div className="tab">Settings</div>
    </div>
  );
}

export default Sidebar;
