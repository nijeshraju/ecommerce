import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from "../features/api/apiSlice";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import { CartContext } from "../context/cart";

function Detail() {
    const { id } = useParams();
    const { data, isLoading, isSuccess } = useGetProductQuery(id);
    const { cartItems, addToCart } = useContext(CartContext)

    return (
        <div>
            <Header2 />

            <section className="details-section">
                <div className="container">
                    <div className="details-box ">
                        <div className="product-image">
                            <Carousel>
                                {data?.images && data?.images?.map((image, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <img src={image} alt="" />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>

                        <div className="detail">
                            <h3>{data?.title}</h3>

                            <div>
                                <span className="rating">
                                    <span>{data?.rating.toFixed(1)}</span>
                                    <img src="/star.svg" alt="star" />
                                </span>
                                <span className="reviews">40 Ratings & 16 Reviews</span>
                            </div>
                            <div className="brand">{data?.category} {'>'} {data?.brand}</div>
                            <div className="price">
                                <p>
                                    <span className="main-text">$ {data?.price - (data?.price * Math.round(data?.discountPercentage) / 100)}</span>
                                    <span className="gray-text">$ {data?.price} </span>
                                    <span className="green-text">{Math.round(data?.discountPercentage)}% off</span>
                                </p>
                            </div>

                            <div className="stock">
                                <p>
                                    Usually delivered in 7 days? Enter pincode for exact
                                    delivery dates/charges View Details
                                </p>
                            </div>

                            <div className="product-description">
                                <h6>Product Description</h6>

                                <div className="description">
                                    <p>{data?.description}</p>
                                </div>
                            </div>

                            <div className="cart-buttons">
                                <button onClick={() => addToCart(data)} className="cart">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}


export default Detail;
