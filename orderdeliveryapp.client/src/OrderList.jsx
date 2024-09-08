import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchData } from './Utils.jsx';


const OrderList = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchData('https://localhost:7245/api/orders').then(x => setOrders(x))
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    const goToOrderDetails = (id) => {
        navigate(`/orders/${id}`);
    };

    return (
        <div>
            <h1>Orders list</h1>
            <button onClick={goBack}>Back</button>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order #{order.orderNumber} - {order.senderCity} -> {order.receiverCity}
                        <button onClick={() => goToOrderDetails(order.id)}>Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;

