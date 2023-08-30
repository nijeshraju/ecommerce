import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useGetProductsQuery } from '../features/api/apiSlice'
import Header from "../components/Header";
import ProductCard from "../components/productCard";

function Product() {
    const { data , isLoading, isSuccess } = useGetProductsQuery();
    const [productsData, setProductsData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setProductsData(data?.products);
    }, [data?.products]);

    useEffect(() => {
        const queryLower = query.toLowerCase();
        setProductsData(data?.products?.filter((product) => product.title.toLowerCase().includes(queryLower) || product.category.toLowerCase().includes(queryLower)));
    }, [query]);

    return (
        <div>
            <Header query={query} setQuery={setQuery} />

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
