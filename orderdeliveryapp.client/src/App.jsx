import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderForm from './OrderForm.jsx';
import OrderList from './OrderList.jsx';
import OrderDetails from './OrderDetails.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OrderForm />} />
                <Route path="/orders" element={<OrderList />} />
                <Route path="/orders/:id" element={<OrderDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
