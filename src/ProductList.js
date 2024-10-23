import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const { page } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            const limit = 10;
            const skip = (currentPage - 1) * limit;
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await response.json();
            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / limit));
        };
        fetchProducts();
    }, [currentPage]);

    useEffect(() => {
        if (page) {
            setCurrentPage(parseInt(page));
        }
    }, [page]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/${pageNumber}`);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Product Listing</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {[...Array(totalPages).keys()].map(pageNumber => (
                        <li key={pageNumber} className={`page-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(pageNumber + 1)}>
                                {pageNumber + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ProductList;