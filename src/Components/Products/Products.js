import React from 'react';
import "./Products.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Products = props => {
    const { image, name, price, rating } = props.product
    return (
        <div className="product">
            <div className="product-img">
                <img src={image} alt={name} />
            </div>
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p className='price'>Price : ৳ {price}</p>
                <small>Rating: {rating.rate} ({rating.count})</small>
            </div>
            <button className="cart-btn">
                <p onClick={() => props.cart(props.product)}>Add To Cart</p>
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus} />

            </button>
        </div>
    );
};

export default Products;