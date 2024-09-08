import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const goToOrders = () => {
        navigate('/orders');
    };

    const goCreateOrder = () => {
        navigate('/create-order');
    };

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={goToOrders}>Go to orders list</button>
            <button onClick={goCreateOrder}>Create order</button>

        </div>
    );
};

export default HomePage;
