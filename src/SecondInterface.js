// SecondInterface.js

import React from 'react';
import './App.css'; // Make sure to import your CSS file

function SecondInterface({ name, mobile, items, totalPrice, onBack }) {
  return (
    <div className="interface-container">
      <div className="invoice-header">
        <h1>Aditi Banquet Hall</h1>
        <p>At Post Nitur - 413530</p>
      </div>
      <div className="customer-info">
        <p>Name: {name}</p>
        <p>Mobile No.: {mobile}</p>
      </div>
      <div className="invoice-items">
        <table>
          <thead>
            <tr>
              <th>Item No.</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>Rs.{item.price}</td>
                <td>{item.quantity}</td>
                <td>Rs.{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="invoice-total">
        <p>Total Price: Rs.{totalPrice}</p>
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default SecondInterface;
