import React from "react";
import { useGetProductQuery } from '../features/api/apiSlice';
import Footer from "../components/Footer";

function Detail() {
    const { data, isLoading, isSuccess } = useGetProductQuery(1);

    console.log({ data });
    return (
        <div>
            <section class="details-section">
                <div class="container">
                    <div class="details-box ">
                        <div class="product">
                            <div class="top-product">
                                <img
                                    src={data?.thumbnail}
                                    alt=""
                                />
                            </div>
                            <div class="bottom">
                                {data?.images?.map((item3) => {
                                    return (
                                        <div class="item">
                                            <img src={item3.imgmodel} alt=""/>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div class="detail">
                            <div class="text">
                                <p>
                                    {data?.description}
                                </p>
                                <h3>₹ {data?.price}</h3>
                                <h6>
                                    <span> ₹23,99.00 </span>
                                    {data?.offer?.stringValue}
                                </h6>
                            </div>

                            <div class="barand-details">
                                <div class="first-text">
                                    <h6>
                                        {data?.text?.stringValue}
                                    </h6>
                                    <p>
                                        {data?.description}
                                    </p>
                                </div>
                                <div class="second-text">
                                    <h6>Product Details</h6>

                                    <div class="forth-text">
                                        <p>
                                            Usually delivered in 7 days? Enter pincode for exact
                                            delivery dates/charges View Details
                                        </p>
                                    </div>
                                </div>
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
