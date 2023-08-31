import React, { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from '../../context/cart';

function Header2() {
    const { getCartQuantity } = useContext(CartContext);
    
    return (
        <div className="main-nav">
            <section className="g-navbar">
                <div className="g-nav">
                    <div className="container">
                        <div className="top-nav">
                            <div className="logo">
                                <a href="/">
                                    <img src="/logo.png" alt=""></img>
                                </a>
                            </div>

                            <div className="cart-icons">
                                <a href="/Cart" className="cart-outer">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <div className="cart-count">{getCartQuantity()}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="seperated-line"></hr>
        </div>
    );
}

export default Header2;
