import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProductDetails();
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.images[0]} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {product.discountPercentage && <p>Discount: {product.discountPercentage}%</p>}
            <p>Rating: {product.rating}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductDetails;