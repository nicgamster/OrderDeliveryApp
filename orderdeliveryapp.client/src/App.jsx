import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import OrdersPage from './OrderList';
import OrderDetails from './OrderDetails';
import OrderForm from './OrderForm';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/orders" element={<OrdersPage />} />

                <Route path="/orders/:id" element={<OrderDetails />} />

                <Route path="/create-order" element={<OrderForm />} />
            </Routes>
        </Router>
    );
};

export default App;
