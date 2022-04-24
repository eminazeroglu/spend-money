import React from 'react';
import ProductItem from "./ProductItem";
import {useAppContext} from "../../contexts/AppContext";

function ProductContent(props) {

    const {products} = useAppContext();

    return (
        <div className="grid grid-cols-3 gap-6">
            {products.length > 0 && products.map((i, index) => (
                <ProductItem
                    key={index}
                    item={i}
                />
            ))}
        </div>
    );
}

export default ProductContent;
