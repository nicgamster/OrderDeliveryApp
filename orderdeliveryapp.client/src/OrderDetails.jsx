import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchData } from './Utils.jsx';

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchData(`https://localhost:7245/api/orders/${id}`).then(x => setOrder(x))
    }, [id]);

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <h1>Order Details #{id}</h1>
      {order ? (
        <div>
          <p>Order Number: {order.orderNumber}</p>
          <p>Sender City: {order.senderCity}</p>
          <p>Sender Address: {order.senderAddress}</p>
          <p>Recipient City: {order.recipientCity}</p>
          <p>Recipient Address: {order.recipientAddress}</p>
          <p>Weight: {order.weight} kg</p>
          <p>Pickup Date: {new Date(order.pickupDate).toLocaleDateString()}</p>
          <button onClick={goBack}>Back</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default OrderDetails;

