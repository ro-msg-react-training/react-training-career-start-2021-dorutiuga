import React, { FC, useState } from "react";
import "./products-collection.style.css";
import { PRODUCTS } from "../../products.data";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { Grid } from "@mui/material";

const ProductsCollection: FC = () => {
  // eslint-disable-next-line
  const [products, _setProducts] = useState(PRODUCTS);
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductPreview {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsCollection;
