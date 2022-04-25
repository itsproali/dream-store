import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import "./Home.css";

const Home = () => {
    // Load Products
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // Add To Cart
    const [cart, setCart] = useState([])
    const addToCart = product => {
        if (cart.indexOf(product) !== -1) {
            alert("Already Added in Cart")
            return
        } else {
            const newCart = [...cart, product]
            setCart(newCart)
        }
    }

    // Get Recommended Product
    let [randomItem, setRandomItem] = useState([])
    const getRandom = () => {
        const randomIndex = Math.floor(Math.random() * cart.length)
        randomItem = cart[randomIndex]
        setRandomItem(randomItem)
    }

    // Clear The Cart
    const clearCart = () => {
        const newCart = []
        const randomItem = []
        setCart(newCart)
        setRandomItem(randomItem)
    }

    return (
        <div className='container'>
            <div className="products">
                {/* Display Products */}
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        cart={addToCart}
                    ></Products>)
                }
            </div>
            <div className="shopping-cart">
                <h2 className="shopping-cart-header">Shopping Cart</h2>
                <h3 className='second-title'>Selected Items :</h3>
                <div className="selected-items">
                    {/* Display Selected Items */}
                    {
                        cart.map(item => <div key={item.id} className="selected-item">
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>)
                    }
                </div>
                <button className="choose-one" onClick={getRandom}>Best Product</button>
                <button className="clear" onClick={clearCart}>Choose Again</button>
                {/* Display Recommended Product */}
                {
                    <div className='random-item'>
                        <h3 className='second-title'>Recommended Product :</h3>
                        <img src={randomItem.image} alt={randomItem.name} />
                        <h3>{randomItem.name}</h3>
                        <p>Price : {randomItem.price}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Home;