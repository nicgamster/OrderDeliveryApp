import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderList = () => {
    const [orders, setOrders] = useState([]);


    const fetchData = async () => {
        return axios.get('https://localhost:7245/api/orders')
        .then(res => res.data)
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        fetchData().then(x => setOrders(x))
    }, []);
    
    


    return (
        <ul>
            {orders.map(order => (
                <li key={order.id}>
                    <Link to={`/orders/${order.id}`}>
                        {order.orderNumber} - {order.senderCity} to {order.recipientCity}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default OrderList;
