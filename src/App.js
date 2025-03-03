import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/:page" element={<ProductList />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
};

export default App;