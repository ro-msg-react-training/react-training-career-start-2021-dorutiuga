import React, { FC, useState } from "react";
import "./productsCollection.style.css";
import { PRODUCTS } from "../../products.data";
import ProductPreview from "../product-preview/product-preview.component";

const ProductsCollection: FC = () => {
  // eslint-disable-next-line
  const [products, _setProducts] = useState(PRODUCTS);
  return (
    <div className="collections-overview">
      {products.map((product) => (
        <ProductPreview {...product} />
      ))}
    </div>
  );
};
export default ProductsCollection;
