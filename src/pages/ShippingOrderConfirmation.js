import React from 'react';
import { Link } from 'react-router-dom';

export default function ShippingOrderConfirmation() {
  const token = localStorage.getItem('newShippingOrderRes');
  const resObj = JSON.parse(token);

  //localStorage.removeItem('newShippingOrderRes');
  return (
    <div className="container">
      <div className="card w-60">
        <div className="card-header text-start">
          Your shipping order is created
        </div>
        <div className="card-body text-start">
          <h5 className="card-title">Your Shipping Order Details:</h5>
          <p></p>
          <div className="card-text">
            <p>
              <b>Shipping Order ID:</b> {resObj.orderId}
            </p>
            <p>
              <b>Shipping Order Status:</b> {resObj.status}
            </p>
            <p>
              <b>Message:</b> {resObj.message}
            </p>
          </div>

          <Link
            to={`/shippingOrder/${resObj.orderId}`}
            className="btn btn-primary"
          >
            Get Order Details
          </Link>
        </div>
      </div>
    </div>
  );
}
