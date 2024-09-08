import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const [order, setOrder] = useState(null);
    const { id } = useParams();


    const fetchData = async () => {
        return axios.get(`https://localhost:7245/api/orders/${id}`)
            .then(res => res.data)
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        fetchData().then(x => setOrder(x))
    }, [id]);


    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <h2>Order Details</h2>
            <p><strong>Order Number:</strong> {order.orderNumber}</p>
            <p><strong>Sender City:</strong> {order.senderCity}</p>
            <p><strong>Sender Address:</strong> {order.senderAddress}</p>
            <p><strong>Recipient City:</strong> {order.recipientCity}</p>
            <p><strong>Recipient Address:</strong> {order.recipientAddress}</p>
            <p><strong>Weight:</strong> {order.weight}</p>
            <p><strong>Pickup Date:</strong> {order.pickupDate}</p>
        </div>
    );
};

export default OrderDetails;
