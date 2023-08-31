
import React from "react";
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductCard({ productData }) {
    const navigate = useNavigate();

    return (
        <div className="item">
            <LazyLoadImage
                src={productData?.thumbnail}
                alt=""
                onClick={() => navigate(`detail/${productData?.id}`)}
            />
            <div className="text">
                <p>{productData?.title}</p>
                <p >{productData.description.substring(0, 50)}...</p>
                <p>$ {productData?.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;