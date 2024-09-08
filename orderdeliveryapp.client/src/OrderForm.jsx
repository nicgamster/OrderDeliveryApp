import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [order, setOrder] = useState({
        senderCity: '',
        senderAddress: '',
        recipientCity: '',
        recipientAddress: '',
        weight: '',
        pickupDate: ''
    });

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        console.log(order);
        e.preventDefault();

        axios.post('https://localhost:7245/api/orders', order)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        //try {
        //    await axios.post('https://localhost:7245/api/orders', order);
        //    alert('Order created successfully');
        //} catch (error) {
        //    console.error("There was an error creating the order!", error);
        //}
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="senderCity" value={order.senderCity} onChange={handleChange} placeholder="Sender City" required />
            <input type="text" name="senderAddress" value={order.senderAddress} onChange={handleChange} placeholder="Sender Address" required />
            <input type="text" name="recipientCity" value={order.recipientCity} onChange={handleChange} placeholder="Recipient City" required />
            <input type="text" name="recipientAddress" value={order.recipientAddress} onChange={handleChange} placeholder="Recipient Address" required />
            <input type="number" name="weight" value={order.weight} onChange={handleChange} placeholder="Weight" required />
            <input type="date" name="pickupDate" value={order.pickupDate} onChange={handleChange} required />
            <button type="submit">Create Order</button>
        </form>
    );
};

export default OrderForm;
