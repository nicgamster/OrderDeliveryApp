import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderForm = () => {
    const [order, setOrder] = useState({
        senderCity: '',
        senderAddress: '',
        recipientCity: '',
        recipientAddress: '',
        weight: '',
        pickupDate: '',
        orderNumber: 'string'
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        order.pickupDate = new Date(order.pickupDate).toISOString();

        try {
            await axios.post('https://localhost:7245/api/orders', order);
            alert('Order created successfully');

            console.log(order);
        } catch (error) {
            console.error("There was an error creating the order!", error);
        }



    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>Create New Order</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sender City:</label>
                    <input type="text" name="senderCity" value={order.senderCity} onChange={handleChange} required />
                </div>
                <div>
                    <label>Sender Address:</label>
                    <input type="text" name="senderAddress" value={order.senderAddress} onChange={handleChange} required />
                </div>
                <div>
                    <label>Receiver City:</label>
                    <input type="text" name="recipientCity" value={order.receiverCity} onChange={handleChange} required />
                </div>
                <div>
                    <label>Receiver Address:</label>
                    <input type="text" name="recipientAddress" value={order.receiverAddress} onChange={handleChange} required />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input type="number" name="weight" value={order.weight} onChange={handleChange} min="0.01" step="0.01" required />
                </div>
                <div>
                    <label>Pickup Date:</label>
                    <input type="date" name="pickupDate" value={order.pickupDate} onChange={handleChange} required />
                </div>
                <button type="submit">Create Order</button>
            </form>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default OrderForm;

