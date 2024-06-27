// FirstInterface.js

import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

function FirstInterface({ onNext }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleNext = () => {
    if (name && mobile) {
      onNext({ name, mobile });
    } else {
      alert('Please enter your name and mobile number');
    }
  };

  return (
    <div className="interface-container">
      <div className="invoice-header">
        <h1>Aditi Banquet Hall</h1>
        <p>At Post Nitur - 413530</p>
      </div>
      <div className="customer-info">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Mobile No.:</label>
        <input type="text" value={mobile} onChange={handleMobileChange} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default FirstInterface;
