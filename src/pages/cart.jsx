import React, { useContext } from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { CartContext } from '../context/cart';

function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartQuantity } = useContext(CartContext);

    return (
        <div>
            <Header2 />

            <section className="cart-section">
                <div className="container">
                    {cartItems.length > 0 ? (
                        <div className="cart-detail">
                            <div className="product-list">
                                {cartItems.map((item) => (
                                    <div className="product-detail" key={item.id}>
                                        <div className="prod-data">
                                            <a href={`detail/${item?.id}`}><img src={item.thumbnail} alt={item.title} className="product-image" /></a>
                                            <div className="product-desc">
                                                <h6 className="text-lg font-bold">{item.title}</h6>
                                                <p className="brand">Seller: {item?.brand}</p>
                                                <p>
                                                    <span className="main-text">$ {Math.round(item?.price - (item?.price * Math.round(item?.discountPercentage) / 100))}</span>
                                                    <span className="gray-text">$ {item?.price} </span>
                                                    <span className="green-text">{Math.round(item?.discountPercentage)}% off</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="prod-counter">
                                            <button
                                                className="counter-btn"
                                                onClick={() => {
                                                    removeFromCart(item)
                                                }}
                                            >
                                                -
                                            </button>
                                            <p className="item-count">{item.quantity}</p>
                                            <button
                                                className="counter-btn"
                                                onClick={() => {
                                                    addToCart(item)
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="price-details">
                                <h3>Price Details</h3>
                                <div className="price-details-inner">
                                    <div className="price-list">
                                        <div className="item">
                                            <p>items</p>
                                            <p>{getCartQuantity()}</p>
                                        </div>
                                        <div className="item">
                                            <p>Price</p>
                                            <p>${getCartTotal()}</p>
                                        </div>
                                        <div className="item">
                                            <p>Delivery Charges</p>
                                            <p>Free</p>
                                        </div>
                                        <div className="item">
                                            <p>Total Amount</p>
                                            <p>${getCartTotal()}</p>
                                        </div>
                                    </div>
                                    <div className="order-clear-btn">
                                        <button className="clear-btn" onClick={() => { clearCart() }}>
                                            Clear cart
                                        </button>
                                        <div className="order-btn">
                                            <button className=" placeto-order hvr-btn">
                                                PLACE ORDER
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1 className="empty-cart">Your cart is empty</h1>
                    )
                    }
                </div>
            </section>

            <Footer />
        </div>
    );
}


export default Cart;
