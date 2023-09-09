import React, { useState } from 'react';
import './Profile.css';
import image from '../pages/pet1.jpg';

function Profile() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoUrl(event.target.result);
      };
      reader.readAsDataURL(file);
      setPhotos([...photos, file]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    // For example, send data to a backend server
  };

  return (
    <div className="profile-container">
      <h2>Register As Pet sitter</h2>
      <img src={image} alt="profile cover" />
      <div className="form-group">
        <label>Upload Photo:</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      </div>
      {photoUrl && <img src={photoUrl} alt="Uploaded" />}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label>email:</label>
          <input type="email" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={handleLocationChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea value={address} onChange={handleAddressChange}></textarea>
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
