
import React from "react";

function ProductCard({ productData }) {
    return (
        <div className="item">
            <img
                src={productData?.thumbnail}
                alt=""
            // onClick={() => img_handleclick(productData?.id?.stringValue)}
            />
            <div className="text">
                <p>{productData?.title}</p>
                <p >{productData.description.substring(0, 50)}...</p>
                <p>₹ {productData?.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;