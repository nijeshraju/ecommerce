import React from "react";
import Footer from "../components/Footer";
import { useGetProductsQuery } from '../features/api/apiSlice'
import Header from "../components/Header";
import ProductCard from "../components/productCard";

function Product() {
    const { data } = useGetProductsQuery();
    const productsData = data?.products || [];
    console.log(data);
    return (
        <div>
            <Header />

            <section className="product-section sprt">
                <div className="container">
                    <div className="product-box">
                        <div className="product-text">
                            <h3>Products</h3>
                        </div>
                        <div className="item-box">
                            {productsData &&
                                productsData?.length !== 0 &&
                                productsData?.map((data, index) => {
                                    return (
                                        <ProductCard ky={index} productData={data} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Product;
