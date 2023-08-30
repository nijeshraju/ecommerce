import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ query, setQuery }) {
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

                            <div className="search-bar">
                                <input type="text" placeholder="Serch for products" value={query} onChange={(e) => setQuery(e.target.value)} />
                            </div>

                            <div className="cart-icons">
                                <a href="/Cart">
                                    <FontAwesomeIcon icon={faShoppingCart} />
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

export default Header;
